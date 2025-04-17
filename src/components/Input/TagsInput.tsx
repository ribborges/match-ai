'use client';

import clsx from "clsx";
import { InputHTMLAttributes, useEffect, useState } from "react";
import { X } from "react-bootstrap-icons";

import { InputDropdown, InputDropdownItem } from "./InputDropdown";

interface TagsInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    onTagsChange?: (tags: string[]) => void,
    label?: string,
    data?: string[]
}

export default function TagsInput({ label, className, data, onTagsChange, ...props }: TagsInputProps) {
    const [focus, setFocus] = useState(false);
    const [mouseOverDropdown, setMouseOverDropdown] = useState(false);
    const [tags, setTags] = useState<string[]>([]);

    const emptyOnChange = () => {
        // return onChange as empty string
        if (props.onChange) props.onChange({
            target: {
                value: "",
                name: props.name,
                id: props.id
            }
        } as React.ChangeEvent<HTMLInputElement>);
    }

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value;

        // Check if theres only spaces
        if (value.trim() === "") {
            emptyOnChange();
            return;
        }

        if (value.endsWith(",")) {
            const tag = value.slice(0, -1).trim();

            if (tag && !tags.includes(tag) && data?.includes(tag)) {
                setTags([...tags, tag]);
            }

            emptyOnChange();
        }
    }

    const onSelectTag = (tag: string) => {
        setTags([...tags, tag]);
        emptyOnChange();
    }

    function removeTag(index: number) {
        setTags(tags.filter((el, i) => i !== index))
    }

    useEffect(() => {
        if (onTagsChange) {
            onTagsChange(tags);
        }
    }, [tags]);

    return (
        <div className="relative flex flex-col gap-1">
            {label &&
                <label htmlFor={props.id} className="font-bold">
                    {label}
                </label>
            }
            <div
                className={clsx(
                    "flex items-center flex-wrap border border-zinc-300 dark:border-zinc-700 rounded-lg",
                    focus && "ring-2 ring-indigo-500",
                    className
                )}
            >
                {
                    tags.map((tag, index) => (
                        <Tag key={index} id={tag} label={tag} onClose={() => removeTag(index)} />
                    ))
                }
                <input
                    {...props}
                    type="text"
                    className="flex-1 outline-0 p-2"
                    value={props.value}
                    onFocus={(evt) => {
                        setFocus(true);
                        props.onFocus?.(evt);
                    }}
                    onBlur={(evt) => {
                        setFocus(false);
                        props.onBlur?.(evt);
                    }}
                    onChange={(evt) => {
                        onChange(evt);
                        props.onChange?.(evt);
                    }}
                />
            </div>
            {
                (focus || mouseOverDropdown) && data &&
                <InputDropdown onMouseEnter={() => setMouseOverDropdown(true)} onMouseLeave={() => setMouseOverDropdown(false)}>
                    {
                        data?.filter((item) => {
                            if (props.value === "") return true;
                            return item.toLowerCase().includes((props.value?.toString() || "").toLowerCase());
                        }).filter((item) => {
                            if (tags.includes(item)) return false;
                            return true;
                        }).map((item) => (
                            <InputDropdownItem
                                key={item}
                                onClick={() => {
                                    onSelectTag(item);
                                }}
                            >
                                {item}
                            </InputDropdownItem>
                        ))
                    }
                </InputDropdown>
            }
        </div>
    );
}

interface TagProps {
    id?: string,
    label?: string,
    onClose?: () => void
}

function Tag(props: TagProps) {
    return (
        <div id={props.id} className="inline-flex items-center bg-yellow-500/50 rounded-full px-2 py-1 m-1 border border-yellow-500">
            <span className="text">{props.label}</span>
            <button type="button" className="cursor-pointer" onClick={props.onClose}><X /></button>
        </div>
    );
}