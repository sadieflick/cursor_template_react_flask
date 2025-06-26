import { useState, useEffect, useCallback } from 'react';

interface UseHookNameParams {
  param1: string;
  param2?: number;
}

interface UseHookNameReturn {
  data: DataType | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
  reset: () => void;
}

interface DataType {
  id: string;
  name: string;
}

/**
 * useHookName - Brief description of what this hook does
 */
export const useHookName = ({
  param1,
  param2 = 0
}: UseHookNameParams): UseHookNameReturn => {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/data?param1=${param1}&param2=${param2}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [param1, param2]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback((): void => {
    fetchData();
  }, [fetchData]);

  const reset = useCallback((): void => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
    error,
    refetch,
    reset
  };
};

export type { UseHookNameParams, UseHookNameReturn, DataType };
