// src/data/products.ts
import productImage from '@public/products/product.png';
import foto from '@public/products/foto.png';
import { StaticImageData } from 'next/image';
import tres from '@public/products/3.png';
import cuatro from '@public/products/4.png';
import cinco from '@public/products/5.png';
import seis from '@public/products/6.png';
import siete from '@public/products/7.png';

export interface Product {
	slug: string; // para la ruta dinámica
	title: string;
	description: string;
	image: StaticImageData;
	banner?: StaticImageData;
	products?: string[];
	uses?: string[];
}

export const products: Product[] = [
	{
		slug: 'reductor-de-agua-plastificantes',
		title: 'TIPO A: REDUCTOR DE AGUA - PLASTIFICANTES',
		description:
			'Los reductores de agua o plastificantes, son soluciones químicos que en combinación con el agua reaccionan con el cemento logrando una mejor dispersión de las partículas cementicias,envolviendo así las partículas de los agregados y formando enlaces cohesivos resistentes, que garantizan y mejoran la trabajabilidad de la mezcla para una mejor y rápida colocación.',
		image: foto,
		banner: productImage,
		products: ['Ecoplast 100', 'Plastmax - 2', 'Super Plast'],
		uses: [
			'Concretos convencionales.',
			'Para climas cálidos.',
			'Para climas fríos.',
			'Prefabricados',
		],
	},
	{
		slug: 'retardantes',
		title: 'TIPO B: RETARDANTES',
		description:
			'Los retardadores de fragua tienen como objetivo mantener en condiciones óptimas al concreto para su colocación; su función es ralentizar las reacciones químicas del concreto para evitar el inicio de fragua. El tiempo de inicio de fraguado dependerá del diseño de mezcla, el requerimiento y criterio técnico con el cual haya sido dosificado. Según la norma NTP 334.088 ASTM C494 tipo B, generan una capa protectora que envuelve a las partículas del cemento para evitar su hidratación y posterior cristalización.',
		image: productImage,
		products: [
			'Ecotar',
			'Ecotar - 100',
			'Ecotar - Max',
			'Ecotar - Plus',
			'Retard - 1108',
		],
		uses: [
			'Concretos convencionales',
			'Concretos especiales.',
			'Para climas cálidos.',
		],
	},
	{
		slug: 'acelerante',
		title: 'TIPO C: ACELERANTE',
		description:
			'Los aditivos acelerantes de fragua son una solución para aquellos proyectos en donde se requiera una puesta en servicio rápida. Estos tipos de aditivos aceleran el proceso de fragua, activando en menor tiempo la hidratación del cemento y, como consecuencia, desarrollando las propiedades resistentes del concreto en un menor tiempo.',
		image: tres,
	},
	{
		slug: 'reductores-de-agua-y-retardores',
		title: 'TIPO D: REDUCTORES DE AGUA Y RETARDADORES POLIFUNCIONAL',
		description:
			'Los reductores de fragua tienen como objetivo mantener en condiciones óptimas al concreto para su colocación; su función es ralentizar las reacciones químicas del concreto para evitar el inicio de fragua. Generan una capa protectora que envuelve a las partículas del cemento para evitar su hidratación y posterior cristalización. El tiempo de inicio de fraguado dependerá del diseño de mezcla, el requerimiento y criterio técnico con el cual haya sido dosificado, según la norma NTP 334.088 ASTM C494 tipo E.',
		image: cuatro,
		products: [
			'Ecoplast 200',
			'Ecoplast 201',
			'Ecoplast 202',
			'Ecoplast WG - 5000',
			'Ecoplast NT 40',
			'Ecoplast SP - 10',
		],
		uses: [
			'Concretos convencionales',
			'Concretos especiales.',
			'Para climas cálidos.',
		],
	},
	{
		slug: 'reductores-de-agua-y-aceladores',
		title: 'TIPO E: REDUCTORES DE AGUA Y ACELERADORES',
		description:
			'Los aditivos acelerantes de fragua son una solución para aquellos proyectos en donde se requiera una puesta en servicio rápida. Estos tipos de aditivos aceleran el proceso de fragua, activando en menor tiempo la hidratación del cemento y, como consecuencia, desarrollando las propiedades resistentes del concreto en un menor tiempo. Según la norma NTP 334.088 ASTM C494 tipo G.',
		image: cinco,
		products: [
			'WG - 5000',
			'WG - 7000',
			'WG - 8000',
			'SETRIEM',
			'Eco Akua',
			'WG - 9000',
			'WG - 9500',
		],
		uses: [
			'Concretos convencionales',
			'Concretos especiales.',
			'Para climas cálidos.',
			'A edades Tempranas',
		],
	},
	{
		slug: 'reductores-de-agua-de-alto-rango',
		title: 'TIPO F Y G: REDUCTORES DE AGUA DE ALTO RANGO',
		description:
			'Los aditivos acelerantes de fragua son una solución para aquellos proyectos en donde se requiera una puesta en servicio rápida. Estos tipos de aditivos aceleran el proceso de fragua, activando en menor tiempo la hidratación del cemento y, como consecuencia, desarrollando las propiedades resistentes del concreto en un menor tiempo.',
		image: seis,
		products: ['HP LIVOG', 'HP AKUA'],
		uses: ['Altas Resistencias', 'A edades Tempranas'],
	},
	{
		slug: 'superplastificante-con-retardo',
		title: 'SUPERPLASTIFICANTE CON RETARDO ECOANDINA',
		description:
			'Los aditivos acelerantes de fragua son una solución para aquellos proyectos en donde se requiera una puesta en servicio rápida. Estos tipos de aditivos aceleran el proceso de fragua, activando en menor tiempo la hidratación del cemento y, como consecuencia, desarrollando las propiedades resistentes del concreto en un menor tiempo.',
		image: siete,
		products: ['ACELSHOT AF 1', 'ACELSHOT AF 2'],
		uses: ['Altas Resistencias', 'A edades Tempranas'],
	},
];
