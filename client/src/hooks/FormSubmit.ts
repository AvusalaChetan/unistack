import axios from 'axios';
import { useState } from 'react';
import { SuccessMgs, ErrorMgs } from '../components/common/Message';

// interface userData {
//   name: string;
//   password: string;
//   email: string;
//   role: string;
//   instituteCode: string;
// }

export const useFormSubmit = ({ api }: { api: string }) => {
  const [IsLoading, setIsLoading] = useState(false);

  if (!api) {
    console.error('api is missing');
  }

  const onSubmit = async (data: any) => {
    if (!data.role) {
      const errorMsg = 'choose role';
      console.error(errorMsg);

      ErrorMgs(errorMsg);
      return;
    }
    setIsLoading(true);
    try {
      const res = await axios.post(api, data);
      if (res?.data?.message) {
        SuccessMgs(res.data.message);
      } else {
        SuccessMgs('Success!');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Something went wrong';
      console.log(errorMessage);

      ErrorMgs(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit, IsLoading };
};
