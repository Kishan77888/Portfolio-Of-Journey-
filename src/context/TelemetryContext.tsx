import React, { createContext, useContext, useState, useEffect } from 'react';

export type FrequencyMode = '350Hz' | '432Hz' | '540Hz';

interface TelemetryContextType {
  frequency: number;
  frequencyMode: FrequencyMode;
  setFrequencyMode: (mode: FrequencyMode) => void;
  cycleFrequency: () => void;
}

const TelemetryContext = createContext<TelemetryContextType>({
  frequency: 350,
  frequencyMode: '350Hz',
  setFrequencyMode: () => {},
  cycleFrequency: () => {},
});

export const TelemetryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [frequencyMode, setFrequencyModeState] = useState<FrequencyMode>(() => {
    const saved = localStorage.getItem('kk_telemetry_hz') as FrequencyMode | null;
    return saved && ['350Hz', '432Hz', '540Hz'].includes(saved) ? saved : '350Hz';
  });

  const getBaseHz = (mode: FrequencyMode): number => {
    switch (mode) {
      case '350Hz':
        return 350;
      case '432Hz':
        return 432;
      case '540Hz':
        return 540;
      default:
        return 350;
    }
  };

  const [frequency, setFrequency] = useState<number>(() => getBaseHz(frequencyMode));

  // Update base frequency when mode changes
  const setFrequencyMode = (mode: FrequencyMode) => {
    setFrequencyModeState(mode);
    setFrequency(getBaseHz(mode));
    localStorage.setItem('kk_telemetry_hz', mode);
  };

  // Cycle through modes: 350Hz -> 432Hz -> 540Hz -> 350Hz
  const cycleFrequency = () => {
    if (frequencyMode === '350Hz') {
      setFrequencyMode('432Hz');
    } else if (frequencyMode === '432Hz') {
      setFrequencyMode('540Hz');
    } else {
      setFrequencyMode('350Hz');
    }
  };

  // Gentle realistic SOC sensor micro-fluctuation around the selected frequency
  useEffect(() => {
    const base = getBaseHz(frequencyMode);
    const interval = setInterval(() => {
      setFrequency((prev) => {
        const delta = prev === base ? (Math.random() > 0.5 ? 2 : -2) : 0;
        return base + delta;
      });
    }, 2400);

    return () => clearInterval(interval);
  }, [frequencyMode]);

  return (
    <TelemetryContext.Provider
      value={{
        frequency,
        frequencyMode,
        setFrequencyMode,
        cycleFrequency,
      }}
    >
      {children}
    </TelemetryContext.Provider>
  );
};

export const useTelemetry = () => useContext(TelemetryContext);
