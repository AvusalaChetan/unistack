import { cn } from '@/lib/utils';
import { AlertCircle, X } from 'lucide-react';

interface ErrorsProps {
  errors?: Record<string, { message?: string }>;
  messages?: string[];
  className?: string;
  isDismissible?: boolean;
  onDismiss?: (field?: string) => void;
}

const Errors = ({
  errors = {},
  messages = [],
  className,
  isDismissible = true,
  onDismiss,
}: ErrorsProps) => {
  // Collect all error messages from field errors
  const errorEntries = Object.entries(errors).filter(([, error]) => error?.message);
  const hasErrors = errorEntries.length > 0 || messages.length > 0;

  if (!hasErrors) return null;

  return (
    <div
      className={cn(
        'rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-900/20 dark:text-red-200',
        className
      )}
      role="alert"
    >
      <div className="flex gap-3">
        <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400" />
        <div className="flex-1">
          {messages.length === 1 && isDismissible && errorEntries.length === 0 ? (
            <div className="flex items-center justify-between gap-2">
              <span>{messages[0]}</span>
              <button
                onClick={() => onDismiss?.()}
                className="flex-shrink-0 hover:opacity-70"
                aria-label="Dismiss error"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : null}

          {/* Display standalone error messages */}
          {messages.length > 0 &&
            !(messages.length === 1 && isDismissible && errorEntries.length === 0) && (
              <div className="space-y-2">
                {messages.map((message, idx) => (
                  <p key={idx}>{message}</p>
                ))}
              </div>
            )}

          {/* Display field-specific errors */}
          {errorEntries.length > 0 && (
            <ul className="space-y-1">
              {errorEntries.map(([field, error]) => (
                <li key={field} className="flex items-center justify-between gap-2">
                  <span>
                    <strong>{field}:</strong> {error.message}
                  </span>
                  {isDismissible && (
                    <button
                      onClick={() => onDismiss?.(field)}
                      className="flex-shrink-0 hover:opacity-70"
                      aria-label={`Dismiss ${field} error`}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Errors;
