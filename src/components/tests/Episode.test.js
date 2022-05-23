import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

// jest.mock(Episode, () => ({id: '909342',
// image: '',
// name: 'Chapter One: MADMAX',
// season: '2',
// number: '1',
// summary: 'One year after the events with the Upside Down and the Demogorgon, Will meets with a government doctor.',
// runtime: 48}))

const episode = {
    id: '919191',
    image: '',
    name: 'episode 2',
    season: 2,
    number: 1,
    summary: 'This is a summary',
    runtime: 45
}

test("renders without error", () => {
    
    render(<Episode episode={episode}/>)
 });

test("renders the summary test passed as prop", async () => {
    render(<Episode episode={episode}/>)

    const text = await screen.findByText('This is a summary');

    expect(text).toBeTruthy();
 });

test("renders default image when image is not defined", async () => {
    render(<Episode episode={episode}/>)

    const test = await screen.findByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')

    expect(test).toBeTruthy();
 });