'use client';

import { InputHTMLAttributes, useState } from "react";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import clsx from "clsx";

import { mapsApiKey } from "@/config/env";

interface LocationInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
}

export default function LocationInput({ label, ...props }: LocationInputProps) {
    const {
        placePredictions,
        getPlacePredictions,
        isPlacePredictionsLoading,
    } = useGoogle({
        apiKey: mapsApiKey
    });
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="flex flex-col gap-1">
            {label &&
                <label htmlFor={props.id} className="font-bold">
                    {label}
                </label>
            }
            <input
                {...props}
                type="search"
                onFocus={(evt) => {
                    setIsFocused(true);
                    props.onFocus?.(evt);
                }}
                onChange={(evt) => {
                    getPlacePredictions({ input: evt.target.value });
                    props.onChange?.(evt);
                }}
                className={clsx(
                    "p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",
                    props.className
                )}
            />
            {
                placePredictions.length !== 0 && isFocused &&
                <div
                    className="bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg"
                >
                    {!isPlacePredictionsLoading && (
                        <ul className="flex flex-col gap-1 p-2">
                            {placePredictions.map((item) => (
                                <li
                                    className="hover:bg-zinc-300 dark:hover:bg-zinc-700 p-2 rounded-lg cursor-pointer"
                                    key={item.place_id}
                                    onClick={() => {
                                        props.onChange?.(item.description);
                                        setIsFocused(false);
                                    }}
                                >
                                    {item.description}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            }
        </div>
    );
}