'use client';

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { GeoAltFill, PersonFillCheck, StarFill, X } from "react-bootstrap-icons";

import Match from "@/types/match";

interface MatchCardProps {
    data?: Match,
    affinity?: number
}

export default function MatchCard(props: MatchCardProps) {
    const [hasBeenSwiped, setHasBeenSwiped] = useState(false)
    const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null)

    // Track the card's position as it's dragged
    const x = useMotionValue(0)

    // Transform the x position into rotation and opacity values
    const rotate = useTransform(x, [-200, 200], [-30, 30])

    // Transform values for the like/dislike indicators
    const likeOpacity = useTransform(x, [0, 100], [0, 1])
    const dislikeOpacity = useTransform(x, [-100, 0], [1, 0])

    // Handle the end of a drag gesture
    const handleDragEnd = () => {
        const xValue = x.get()

        // If the card is dragged far enough, consider it swiped
        if (xValue > 80) {
            setHasBeenSwiped(true)
            setSwipeDirection("right")
        } else if (xValue < -80) {
            setHasBeenSwiped(true)
            setSwipeDirection("left")
        }
    }

    return (
        <motion.div
            className="absolute flex-1 flex"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x, rotate }}
            onDragEnd={handleDragEnd}
            animate={
                hasBeenSwiped
                    ? {
                        x: swipeDirection === "right" ? 1000 : -1000,
                        opacity: 0,
                        transition: { duration: 0.5 },
                    }
                    : {}
            }
        >
            <div
                className="
                    relative
                    flex flex-col
                    bg-zinc-200 dark:bg-zinc-800
                    border border-zinc-300 dark:border-zinc-700 rounded-xl
                    shadow-xl shadow-black/10 dark:shadow-white/5
                    overflow-hidden
                    cursor-grab
                    active:cursor-grabbing
                "
            >
                <div className="bg-gradient-to-br from-yellow-500 to-indigo-500 p-4 pt-18">
                    <h2 className="text-2xl font-bold">{props.data?.name}</h2>
                </div>

                <div className="flex flex-col items-start p-6">
                    <div className="flex gap-2">
                        <div className="flex items-center gap-2 bg-gradient-to-br from-indigo-500 to-yellow-500 rounded-full px-2 py-1 text-sm md:text-base">
                            <GeoAltFill />
                            <span>{props.data?.location}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-500 rounded-full px-2 py-1 text-sm md:text-base">
                            <PersonFillCheck />
                            <span>{props.affinity}% de afinidade</span>
                        </div>
                    </div>
                    <p className="text-zinc-800 dark:text-zinc-200 mt-2">
                        {props.data?.bio}
                    </p>
                    <div>
                        <h3 className="text-lg font-bold mt-4">Interests</h3>
                        <ul className="list-disc list-inside">
                            {
                                props.data?.interest.map((interest, index) => (
                                    <li key={index} className="text-zinc-800 dark:text-zinc-200">
                                        {interest}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <motion.div
                    className="absolute top-5 right-5 flex items-center justify-center bg-amber-500 text-white p-2 rounded-full"
                    style={{ opacity: likeOpacity }}
                >
                    <StarFill size={32} />
                </motion.div>

                <motion.div
                    className="absolute top-5 left-5 flex items-center justify-center bg-red-500 text-white p-2 rounded-full"
                    style={{ opacity: dislikeOpacity }}
                >
                    <X size={32} />
                </motion.div>
            </div>
        </motion.div>
    )
}
