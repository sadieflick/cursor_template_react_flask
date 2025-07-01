import React from 'react';

interface ComponentNameProps {
  /**
   * Brief description of prop
   */
  propName: string;
  /**
   * Optional prop with default value
   */
  optionalProp?: boolean;
  /**
   * Event handler
   */
  onEvent?: (value: string) => void;
  /**
   * CSS class name for styling
   */
  className?: string;
}

/**
 * ComponentName - Brief description of component purpose
 */
export const ComponentName: React.FC<ComponentNameProps> = ({
  propName,
  optionalProp = false,
  onEvent,
  className = ''
}) => {
  const [localState, setLocalState] = React.useState<string>('');

  React.useEffect(() => {
    // Side effects
  }, []);

  const handleClick = (): void => {
    if (onEvent) {
      onEvent(localState);
    }
  };

  return (
    <div className={`component-name ${className}`}>
      <h2>{propName}</h2>
      {optionalProp && (
        <button onClick={handleClick}>
          Click me
        </button>
      )}
    </div>
  );
};

export type { ComponentNameProps };
