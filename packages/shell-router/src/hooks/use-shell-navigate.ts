export default function useShellNavigate() {
  const navigate = (pathname: string) => {
    window.dispatchEvent(
      new CustomEvent("[shell] navigate", { detail: pathname })
    );
  };

  return navigate;
}
