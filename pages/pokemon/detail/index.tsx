import React, { FC, useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { Box, Container, Typography, Button } from "@material-ui/core";
import Navbar from '@components/Navbar'
import { useRouter } from "next/router";
import { useLocation } from "react-use";
import axios from "axios";
import { ThemeProvider } from "@material-ui/core";
import { theme } from './../../../src/assets/Theme'


const DetailPokemon = (props) => {
	const location = useLocation()
	const pokemonIndex = location.state?.url.slice(23)
	const [pokemonDetails, setPokemonDetails] = useState([])

	useEffect(() => {
		axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
			.then((response) => setPokemonDetails(response.data))
			.catch(error => {
				console.log(error.response)
			});
	}, [pokemonDetails])
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<Box style={{
				width: '1162px',
				height: '550px',
				backgroundColor: '#ffffff',
				borderRadius: '24px',
				textTransform: 'capitalize',
				color: '#42494D',
				margin: '0 140px'
			}}>
				<Box>
					<Box display='flex'>
						<Box flex={50}>
							<img
								src={pokemonDetails.sprites?.front_default} alt={pokemonDetails.name}
								style={{ width: '100%' }}
							/>
						</Box>
						<Box
							flex={50}
							display='grid'
							style={{
								justifyContent: 'start',
								rowGap: '1rem',
								height: 'fit-content'
							}}
						>
							<Typography
								style={{ fontSize: '40px', fontWeight: '700', lineHeight: '60px', paddingBottom: '36px' }}>
								{pokemonDetails.name}
							</Typography>
							<Box display='flex'
								style={{ gap: '8rem' }}
							>
								<Box display='flex'
									style={{ gap: '4rem' }}
								>
									<Typography
										style={{ fontSize: '20px', fontWeight: '700', lineHeight: '30px' }}
									>Weight:</Typography>
									<Typography
										style={{ fontSize: '20px', lineHeight: '30px' }}
									>{pokemonDetails.height}</Typography>
								</Box>
								<Box display='flex'
									style={{ gap: '4rem' }}
								>
									<Typography
										style={{ fontSize: '20px', fontWeight: '700', lineHeight: '30px' }}
									>Height:</Typography>
									<Typography
										style={{ fontSize: '20px', lineHeight: '30px' }}
									>{pokemonDetails.weight}</Typography>
								</Box>
							</Box>
							<Box display='flex'>
								<Typography
									style={{ fontSize: '20px', fontWeight: '700', lineHeight: '30px' }}
								>Abilities:</Typography>
								<Box component='ul'>
									{pokemonDetails.abilities?.map((abi, index) => (
										<Box component='li' key={index}
											style={{ fontSize: '20px', lineHeight: '30px' }}
										>{abi.ability.name}</Box>
									))}
								</Box>
							</Box>
							<Box display='flex'
								style={{ gap: '4rem' }}
							>
								<Typography
									style={{ fontSize: '20px', fontWeight: '700', lineHeight: '30px' }}
								>Type:</Typography>
								<Box
									display='flex'
									component='ul'
									style={{ listStyle: 'none', margin: '10px 0', padding: 0, rowGap: '1.5rem', columnGap: '2rem', gridTemplateColumns: '1fr 1fr 1fr' }}
								>
									{pokemonDetails.types?.map((type, index) => (
										<Box
											component='li'
											key={index}
											bgcolor={type.type.name}
											style={{ color: '#ffffff', padding: '7px 25px', gap: '14px', borderRadius: '25px', fontSize: '20px', fontWeight: '700', lineHeight: '18px' }}
										>{type.type.name}</Box>
									))}
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box>
					<Typography>
						Other Image:
					</Typography>
					<Box component='ul'>
						{/* 500 Internal Server Error , maybe route  */}
						{/* {pokemonDetails..map((img,index)=>(
							<Box key={index}>
								<img src={img.front_default} alt="" />
							</Box>
						))} */}
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default DetailPokemon;
