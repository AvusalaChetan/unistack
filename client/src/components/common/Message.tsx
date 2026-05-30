import { toast } from 'sonner';

export const SuccessMgs = (message: string) => {
  toast.success(message);
};

export const ErrorMgs = (message: string) => {
  toast.error(message);
};