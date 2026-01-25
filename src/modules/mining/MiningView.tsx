import Banner from '@/common/components/customize/Banner';
import { Container } from '@/common/components/customize/Container';
import React from 'react';
import foto from '@public/about/portada-about.png';
import {
	Pickaxe,
	ShieldAlert,
	Zap,
	Waves,
	HardHat,
	Factory,
	ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

const MiningView = () => {
	const miningServices = [
		{
			icon: <Pickaxe className="text-white " size={32} />,
			title: 'Sostenimiento de Túneles',
			desc: 'Sistemas de pernos de anclaje y mallas de alta resistencia para minería subterránea profunda.',
		},
		{
			icon: <Factory className="text-white " size={32} />,
			title: 'Shotcrete de Alto Desempeño',
			desc: 'Aditivos acelerantes y fibras estructurales para lanzado de concreto en labores críticas.',
		},
		{
			icon: <Waves className="text-white " size={32} />,
			title: 'Control de Relaves',
			desc: 'Soluciones químicas para la sedimentación y manejo eficiente de desechos mineros.',
		},
		{
			icon: <ShieldAlert className="text-white " size={32} />,
			title: 'Impermeabilización Estructural',
			desc: 'Membranas y selladores para evitar filtraciones en chimeneas y galerías principales.',
		},
	];
	return (
		<>
			<Container size="full" className="py-0 px-0">
				<Banner image={foto} title="Minería" overlay={false} />
			</Container>
			<Container size="full" className="bg-ecoandina-plomo">
				<Container className="   relative z-10 py-0 px-0 space-y-10">
					<div className="max-w-2xl space-y-2 self-start">
						<h3 className="text-ecoandina-rojo font-bold"> División Minera</h3>
						<div className="space-y-2">
							<h2 className="text-3xl font-bold">
								Operaciones de Alta Precisión
							</h2>
							<div className="w-16 h-[5px] bg-ecoandina-rojo rounded-full mb-6"></div>
							<p className="font-light leading-relaxed">
								Proveemos soluciones integrales para los desafíos más complejos
								de la minería moderna, enfocándonos en la seguridad del personal
								y la eficiencia operativa.
							</p>
						</div>
					</div>

					{/* Grid de Servicios */}
					<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
						{miningServices.map((service, idx) => (
							<div key={idx} className="group p-8  bg-white  rounded-3xl  ">
								<div className="mb-4 p-4 bg-ecoandina-rojo rounded-2xl inline-block   shadow-inner">
									{service.icon}
								</div>
								<h4 className="text-lg font-bold mb-2 ">{service.title}</h4>
								<p className="text-sm leading-relaxed font-light">
									{service.desc}
								</p>
							</div>
						))}
					</div>

					<div className="rounded-[2.5rem] overflow-hidden relative group shadow-2xl border border-white/5">
						<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10"></div>
						<img
							src="https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80&w=1600"
							alt="Minería Subterránea Ecoandina"
							className="w-full h-[300px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-300"
						/>
						<div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-16 max-w-2xl">
							<h4 className="text-3xl md:text-4xl font-black mb-6 leading-tight text-white">
								Ingeniería que Desafía la{' '}
								<span className="text-ecoandina-rojo">Geología.</span>
							</h4>
							<p className="text-white mb-10 hidden sm:block text-lg font-light leading-relaxed">
								Nuestros aditivos químicos están diseñados para resistir las
								condiciones geológicas más adversas de los Andes, garantizando
								la estabilidad de cada galería bajo los más altos estándares
								internacionales.
							</p>
							<div className="flex flex-wrap gap-4">
								<Link
									href="https://wa.me/51936550858?text=Hola,%20quiero%20recibir%20asesoría%20especializada%20sobre%20sus%20servicios."
									target="_blank"
									rel="noopener noreferrer"
									className="bg-ecoandina-rojo cursor-pointer text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-red-900/30 flex items-center gap-3 active:scale-95"
								>
									Contactar Especialista <ChevronRight size={18} />
								</Link>
								{/* <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-4 px-10 rounded-xl transition-all border border-white/10">
									Contactar Especialista
								</button> */}
							</div>
						</div>
					</div>
				</Container>
			</Container>
		</>
	);
};

export default MiningView;
