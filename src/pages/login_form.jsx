import { useNavigate } from "react-router";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-5 h-5">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.54 28.59A14.5 14.5 0 019.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.99 23.99 0 000 24c0 3.77.87 7.35 2.54 10.59l7.98-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.91-2.14 15.88-5.82l-7.73-6c-2.15 1.44-4.9 2.3-8.15 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/jobs");
  };

  return (
    <>
      <div className="md:mt-15 mt-10 flex flex-col">
        <form
          class="max-w-sm mx-auto"
          action="#"
          method="get"
          onSubmit={handleSubmit}
        >
          <div class="mb-5">
            <label
              for="email-alternative"
              class="block mb-2.5 text-sm font-medium text-heading"
            >
              Your email
            </label>
            <input
              type="email"
              id="email-alternative"
              class="bg-neutral-secondary-medium border-none border-default-medium text-heading text-sm rounded-none block md:w-sm w-full px-3 py-2.5 placeholder:text-body"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password-alternative"
              class="block mb-2.5 text-sm font-medium text-heading"
            >
              Your password
            </label>
            <input
              type="password"
              id="password-alternative"
              class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-none block md:w-sm w-full px-3 py-2.5 placeholder:text-body"
              placeholder="••••••••"
              required
            />
          </div>
          <div class="flex items-start mb-5">
            <label for="remember-alternative" class="flex items-center h-5">
              <input
                id="remember-alternative"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                required
              />
              <p class="ms-2 text-sm font-medium text-heading select-none">
                I agree with the{" "}
                <a href="#" class="text-fg-brand hover:underline">
                  terms and conditions
                </a>
                .
              </p>
            </label>
          </div>
          <button
            type="submit"
            class="text-white bg-brand box-border border-none border-transparent hover:bg-brand-strong font-medium leading-5 rounded-none text-sm px-4 py-2.5 focus:outline-none"
          >
            Submit
          </button>
          <div class="mt-4">
            <button
              type="button"
              class="w-full flex items-center justify-center gap-3 text-heading bg-white border border-default-medium hover:bg-neutral-secondary-soft focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              <GoogleIcon />
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
