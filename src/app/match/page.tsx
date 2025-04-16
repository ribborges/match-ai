import { Stars } from "react-bootstrap-icons";

import { Input, LocationInput } from "@/components/Input";

export default function Match() {
    return (
        <div className="flex-1 flex flex-col">
            <h2 className="flex text-2xl font-bold items-center gap-2">
                <Stars />
                Encontre conexões baseadas em afinidade
            </h2>
            <h3 className="text-lg text-zinc-600 dark:text-zinc-400">
                Preencha seus dados para encontrarmos as melhores conexões para você
            </h3>
            <form className="p-2 flex flex-col gap-4">
                <Input label="Nome" placeholder="Digite seu nome completo" />
                <LocationInput label="Localização" placeholder="Digite sua localização" />
            </form>
        </div>
    );
}