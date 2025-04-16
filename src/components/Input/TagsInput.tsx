'use client';

import clsx from "clsx";
import { InputHTMLAttributes, useState } from "react";
import { X } from "react-bootstrap-icons";

import { InputDropdown, InputDropdownItem } from "./InputDropdown";

interface TagsInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string,
    data?: string[]
}

export default function TagsInput({ label, className, data, ...props }: TagsInputProps) {
    const [focus, setFocus] = useState(false);
    const [tags, setTags] = useState<string[]>([]);
    const [typedTag, setTypedTag] = useState<string>("");

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value;

        setTypedTag(value);

        if (value.endsWith(",")) {
            const tag = value.slice(0, -1).trim();
            if (tag && !tags.includes(tag) && data?.includes(tag)) {
                setTags([...tags, tag]);
                setTypedTag("");
            } else {
                setTypedTag("");
            }
        }
    }

    const onSelectTag = (tag: string) => {
        setTags([...tags, tag]);
        setTypedTag("");
    }

    function removeTag(index: number) {
        setTags(tags.filter((el, i) => i !== index))
    }

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
                    value={typedTag}
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
                focus && data &&
                <InputDropdown>
                    {
                        data?.filter((item) => {
                            if (typedTag === "") return true;
                            return item.toLowerCase().includes(typedTag.toLowerCase());
                        }).filter((item) => {
                            if (tags.includes(item)) return false;
                            return true;
                        }).map((item) => (
                            <InputDropdownItem
                                key={item}
                                onClick={() => {
                                    onSelectTag(item);
                                    setTypedTag("");
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
            <button className="cursor-pointer" onClick={props.onClose}><X /></button>
        </div>
    );
}