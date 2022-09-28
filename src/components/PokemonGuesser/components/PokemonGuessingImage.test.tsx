import {render, screen} from '@testing-library/react'
import {ResultState} from '../types';
import {PokemonGuessingImage} from './PokemonGuessingImage';

describe('PokemonGuessingImage',()=>{
	it("Should render",()=>{
		render(<PokemonGuessingImage state={ResultState.GUESSING} pokemon={{id:1}}/>)
	})

	it("Should have a black background", ()=>{
		render(<PokemonGuessingImage state={ResultState.GUESSING} pokemon={{id:1}}/>)
		expect(screen.getByRole("img")).toHaveStyle({
			"background":"black"
		});
	})

	it("Should have a white background", ()=>{
		render(<PokemonGuessingImage state={ResultState.SUCCESS} pokemon={{id:1}}/>)
		expect(screen.getByRole("img")).toHaveStyle({
			"background":"white"
		});
	})
});
