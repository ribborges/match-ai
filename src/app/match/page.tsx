'use client';

import { useState } from "react";
import { Flower2, PersonFillExclamation, Stars } from "react-bootstrap-icons";

import { Input, LocationInput, TagsInput } from "@/components/Input";
import Button from "@/components/Button";
import { areasOfInterest, potentialMatches } from "@/data";
import MatchForm from "@/types/matchForm";
import MatchCard from "@/components/MatchCard";
import AnimatedButton from "@/components/AnimatedButton";
import Match from "@/types/match";

export default function MatchPage() {
    const [itsAMatch, setItsAMatch] = useState(false);
    const [interestInput, setInterestInput] = useState<string>();
    const [matches, setMatches] = useState<Array<{ match: Match; score: number }>>([]);
    const [formData, setFormData] = useState<MatchForm>({
        name: "",
        interest: [],
        location: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

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

    const simulateMatch = () => {
        const scoredMatches = potentialMatches.map((match) => {
            let score = 0;

            score += 10; // Base score for all matches

            if (match.location === formData.location) {
                score += 30;
            } else {
                score += 10;
            }

            formData.interest.forEach((interest) => {
                if (match.interest.includes(interest)) {
                    score += 30;
                }
            });

            score = Math.min(score, 100);

            return { match, score };
        });

        return scoredMatches.sort((a, b) => b.score - a.score).slice(0, 3).reverse();
    }

    const handleMatch = () => {
        setError(undefined);

        if (!formData.interest.length || !formData.location || !formData.name) {
            setError("Por favor, preencha todos os campos.");
            return;
        }

        setIsLoading(true);

        // Simulate a delay to mimic an API call
        setTimeout(() => {
            const matches = simulateMatch();

            if (matches.length > 0) {
                setMatches(matches);
                setItsAMatch(true);
            } else {
                setError("Nenhum match encontrado com os critérios fornecidos.");
            }

            setIsLoading(false);
        }, 1000);
    }

    return (
        <div className="flex-1 flex flex-col md:flex-row gap-2">
            {
                itsAMatch ?
                    <div className="flex-1 flex flex-col items-stretch md:items-center gap-8">
                        <h2 className="flex text-2xl font-bold items-center gap-2">
                            <PersonFillExclamation />
                            Seus matches
                        </h2>
                        <div className="relative flex-1 flex flex-col items-center justify-center gap-2 md:min-w-3/4 lg:min-w-2/4 xl:min-w-1/4">
                            {
                                matches.map((match, index) => (
                                    <MatchCard
                                        key={index}
                                        data={match.match}
                                        affinity={match.score}
                                    />
                                ))
                            }
                            <AnimatedButton onClick={() => setItsAMatch(false)}>
                                Retornar ao formulário
                            </AnimatedButton>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-zinc-600 dark:text-zinc-400">Deslize para direita para favoriar ou para esquerda para recusar</span>
                        </div>
                    </div> :
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
                                    value={interestInput}
                                    onChange={(e) => setInterestInput(e.target.value)}
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
                            <div className="flex flex-col items-start gap-2">
                                {error && <span className="text-red-500">{error}</span>}
                                <Button type="button" onClick={handleMatch} disabled={isLoading}>
                                    {
                                        isLoading ?
                                            <div className="flex items-center gap-2">
                                                <span className="animate-spin"><Flower2 /></span>
                                                Buscando matches...
                                            </div>
                                            :
                                            <div className="flex items-center gap-2">
                                                <Stars />
                                                Encontrar matches
                                            </div>
                                    }
                                </Button>
                            </div>
                        </form>
                    </div>
            }
        </div>
    );
}