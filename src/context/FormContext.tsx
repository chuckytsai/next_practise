"use client";
import React, { createContext, useContext, useState } from 'react';

type FormData = {
    name?: string;
    email?: string;
    phone?: string;
};

const FormContext = createContext<{
    data: FormData;
    updateData: (newData: Partial<FormData>) => void;
}>({
    data: {},
    updateData: () => { },
});

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<FormData>({});

    const updateData = (newData: Partial<FormData>) => {
        setData(prev => ({ ...prev, ...newData }));
    };

    return (
        <FormContext.Provider value={{ data, updateData }}>
            {children}
        </FormContext.Provider>
    );
};