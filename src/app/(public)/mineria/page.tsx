import { DEFAULT_SEO_MINING } from '@/common/constants/seo-config';
import generateSeoMetadata from '@/lib/generateSeoMetadata';
import MiningView from '@/modules/mining/MiningView';
import React from 'react';

export async function generateMetadata() {
	return generateSeoMetadata({
		title: DEFAULT_SEO_MINING.title,
		description: DEFAULT_SEO_MINING.description,
		keywords: DEFAULT_SEO_MINING.keywords,
	});
}
export default function page() {
	return <MiningView />;
}
