'use client';
import { useForm } from '@/context/FormContext';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const steps = ['personal', 'contact', 'confirm'];

export default function StepPage() {
    const { data, updateData } = useForm();
    const router = useRouter();
    const { slug } = useParams();
    const [formValue, setFormValue] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        setFormValue({ ...formValue, ...data });
    }, [slug]);

    const handleNext = () => {
        updateData(formValue);
        const currentIndex = steps.indexOf(slug as string);
        if (currentIndex < steps.length - 1) {
            router.push(`/users/store/${steps[currentIndex + 1]}`);
        }
    };

    const handleBack = () => {
        const currentIndex = steps.indexOf(slug as string);
        if (currentIndex > 0) {
            router.push(`/users/store/${steps[currentIndex - 1]}`);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">步驟：{slug}</h2>
            {slug === 'personal' && (
                <input
                    value={formValue.name}
                    onChange={e => setFormValue({ ...formValue, name: e.target.value })}
                    placeholder="姓名"
                    className="border p-2 mb-4 block"
                />
            )}
            {slug === 'contact' && (
                <>
                    <input
                        value={formValue.email}
                        onChange={e => setFormValue({ ...formValue, email: e.target.value })}
                        placeholder="Email"
                        className="border p-2 mb-4 block"
                    />
                    <input
                        value={formValue.phone}
                        onChange={e => setFormValue({ ...formValue, phone: e.target.value })}
                        placeholder="電話"
                        className="border p-2 mb-4 block"
                    />
                </>
            )}
            {slug === 'confirm' && (
                <div>
                    <p>姓名：{data.name}</p>
                    <p>Email：{data.email}</p>
                    <p>電話：{data.phone}</p>
                </div>
            )}
            <div className="flex gap-2 mt-4">
                {slug !== 'personal' && <button onClick={handleBack}>← 上一步</button>}
                {slug !== 'confirm' && <button onClick={handleNext}>下一步 →</button>}
                {slug === 'confirm' && <button onClick={() => alert('送出！')}>送出</button>}
            </div>
        </div>
    );
}