'use client';

import { useState } from "react";
import { Stars } from "react-bootstrap-icons";

import { Input, LocationInput, TagsInput } from "@/components/Input";
import Button from "@/components/Button";
import { areasOfInterest } from "@/data";
import MatchForm from "@/types/matchForm";

export default function Match() {
    const [formData, setFormData] = useState<MatchForm>({
        name: "",
        interest: [],
        location: "",
    });

    const onChangeName = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value;
        setFormData({ ...formData, name: value });
    }

    const onChangeTags = (tags: string[]) => {
        setFormData({ ...formData, interest: tags });
    }

    const onChangeLocation = (location: string) => {
        setFormData({ ...formData, location });
    }

    return (
        <div className="flex-1 flex flex-col">
            <h2 className="flex text-2xl font-bold items-center gap-2">
                <Stars />
                Encontre conexões baseadas em afinidade
            </h2>
            <h3 className="text-lg text-zinc-600 dark:text-zinc-400">
                Preencha seus dados para encontrarmos as melhores conexões para você
            </h3>
            <form className="p-2 flex-1 flex flex-col">
                <div className="flex-1 flex flex-col gap-4">
                    <Input
                        id="name"
                        name="name"
                        label="Nome"
                        placeholder="Digite seu nome completo"
                        value={formData.name}
                        onChange={onChangeName}
                    />
                    <TagsInput
                        id="interest"
                        name="interest"
                        onTagsChange={onChangeTags}
                        label="Área de interesse"
                        placeholder="Digite uma área de interesse"
                        data={areasOfInterest}
                    />
                    <LocationInput
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={(e) => onChangeLocation(e.target.value)}
                        label="Localização"
                        placeholder="Digite sua localização"
                    />
                </div>
                <div>
                    <Button type="submit">
                        Buscar conexões
                    </Button>
                </div>
            </form>
        </div>
    );
}