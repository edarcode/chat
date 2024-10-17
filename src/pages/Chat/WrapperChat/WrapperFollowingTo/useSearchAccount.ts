import { useQuery } from "@tanstack/react-query";
import { searchAccountService } from "./searchAccountService";
import { useAuth } from "../../../../auth/useAuth";
import { useEffect, useState } from "react";
import { emailSchema } from "../../../../zod-schemas/emailSchema";

export const useSearchAccount = () => {
  const token = useAuth((auth) => auth.token);
  const [email, setEmail] = useState("");
  const [debouncedEmail, setDebouncedEmail] = useState(email);

  const format = emailSchema.safeParse(email + "@gmail.com");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search-account", { token, email }],
    queryFn: (tanStack) =>
      searchAccountService({
        signal: tanStack.signal,
        token,
        email,
      }),
    staleTime: 1000 * 60 * 60 * 24,
    enabled: !!token && !!email && format.success,
    retry: 1,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setEmail(debouncedEmail);
    }, 250);

    return () => clearTimeout(timeoutId);
  }, [debouncedEmail]);

  return {
    accountFound: data,
    isLoading,
    isError,
    setEmail: setDebouncedEmail,
    email: debouncedEmail,
    cleanEmail: () => setDebouncedEmail(""),
  };
};
