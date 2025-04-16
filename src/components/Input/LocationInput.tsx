'use client';

import { InputHTMLAttributes, useState } from "react";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import clsx from "clsx";

import { mapsApiKey } from "@/config/env";

import { InputDropdown, InputDropdownItem } from "./InputDropdown";

interface LocationInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
}

export default function LocationInput({ label, ...props }: LocationInputProps) {
    const [focus, setFocus] = useState(false);
    const [mouseOverDropdown, setMouseOverDropdown] = useState(false);
    const {
        placePredictions,
        getPlacePredictions,
        isPlacePredictionsLoading,
    } = useGoogle({
        apiKey: mapsApiKey
    });

    const onSelectPrediction = (description: string) => {
        const syntheticEvent = {
            target: {
                value: description,
                name: props.name,
                id: props.id
            }
        } as React.ChangeEvent<HTMLInputElement>;
        props.onChange?.(syntheticEvent);
        setFocus(false);
    }

    return (
        <div className="relative flex flex-col gap-1">
            {label &&
                <label htmlFor={props.id} className="font-bold">
                    {label}
                </label>
            }
            <input
                {...props}
                type="search"
                onFocus={(evt) => {
                    setFocus(true);
                    props.onFocus?.(evt);
                }}
                onBlur={(evt) => {
                    setFocus(false);
                    props.onBlur?.(evt);
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
                placePredictions.length !== 0 && (focus || mouseOverDropdown) && !isPlacePredictionsLoading &&
                <InputDropdown onMouseEnter={() => setMouseOverDropdown(true)} onMouseLeave={() => setMouseOverDropdown(false)}>
                    {
                        placePredictions.map((item) => (
                            <InputDropdownItem
                                key={item.place_id}
                                onClick={() => onSelectPrediction(item.description)}
                            >
                                {item.description}
                            </InputDropdownItem>
                        ))
                    }
                </InputDropdown>
            }
        </div>
    );
}