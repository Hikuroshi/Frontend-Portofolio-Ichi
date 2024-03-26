"use client";

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSupabase, SiSvelte, SiTailwindcss } from 'react-icons/si'

export default function Skill() {
    const skills = [
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },
        {
            text: "Supabase",
            Icon: SiSupabase,
        },
        {
            text: "Postgres",
            Icon: SiPostgresql,
        },
        {
            text: "Git",
            Icon: SiGit,
        },
        {
            text: "Node.js",
            Icon: SiNodedotjs,
        },
        {
            text: "Svelte",
            Icon: SiSvelte,
        },
        {
            text: "Javascript",
            Icon: SiJavascript,
        },
    ]

    return (
        <div className='max-w-5xl mx-auto px-8'>
            <Title text='Skills 🔪' className='flex flex-col items-center justify-center -rotate-6' />
            <HoverEffect items={skills} />
        </div>
    )
}
