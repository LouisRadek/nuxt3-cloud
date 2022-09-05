<template>
    <div>
        <slot></slot>
    </div>
</template>

<style>
    :root {
    --text-primary: white;
    --bg-primary: #34343d;
    --bg-secondary: #141418;
    }

    *{
    font-size: 17.25px;
    color: white;
    line-height: 10mm;
    box-sizing: border-box;
    }

    body {
    background: var(--bg-secondary);
    margin: 0;
    padding: 0; 
    }

    body::-webkit-scrollbar {
    width: 0.35rem;
    height: 0.35rem;
    }

    body::-webkit-scrollbar-thumb {
    background: #6649b8
    }

    body::-webkit-scrollbar-track {
    background: #1e1e24;
    }
</style>