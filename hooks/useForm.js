import { useCallback, useState } from "react";

export default function useForm(initialState) {
   // check if initialState is not an object
   if (typeof initialState !== "object") {
      throw new Error("InitialState should be of type object");
   }
   // check if initialState is not defined or is null
   if (initialState == undefined) {
      throw new Error("InitialState is required");
   }

   // initialize state
   const [formState, setFormState] = useState(initialState);

   const updateStateProperty = useCallback(
      (property, newValue) => {
         if (!(property in formState)) {
            throw new Error(`${property} is not included in initialState`);
         }

         setFormState(prev => {
            let newVal = {
               ...prev,
               [property]: newValue,
            };

            return newVal;
         });
      },
      [formState]
   );

   const resetFormData = useCallback(
      () => setFormState(initialState),
      [initialState]
   );

   return [formState, updateStateProperty, resetFormData];
}
