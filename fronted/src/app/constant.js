import { useEffect } from "react";

export function getTotalProductsPerPage() {
    return 10;
}

export function getLoggeduserId(){
    return "650b259fd6f58d3d39876f47";
}

export function useEffectAsync(effect, inputs) {
    useEffect(() => {
      effect();
    }, inputs); // eslint-disable-line react-hooks/exhaustive-deps
  }
  


export function gettoastOptions(){
    const toastOptions = {
        position: "bottom-right",
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
    return toastOptions;
}
