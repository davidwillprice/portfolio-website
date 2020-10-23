import React from 'react';
import FullWidthImage from '../../components/full-width-img';
import Layout from '../../components/layout/layout';
import Morph from '../../components/morphing-images'
import SEO from '../../components/head/seo';
import StandardCentralText from '../../components/standard-central-text';
import TitleBanner from '../../components/layout/title-banner';

import SolarStyles from '../../styles/page/solargraphy.module.css'

import Image8 from '../../images/solargraphy/solargraph-image-8.jpg'
import Image8NoStreaks from '../../images/solargraphy/solargraph-image-8-no-streaks.jpg';
import Image17 from '../../images/solargraphy/solargraph-image-17.jpg';
import Image28 from '../../images/solargraphy/solargraph-image-28.jpg';
import Image28Zoom from '../../images/solargraphy/solargraph-image-28-zoom.jpg';
import Image28ZoomView from '../../images/solargraphy/solargraph-image-28-zoom-view.jpg';
import Image34 from '../../images/solargraphy/solargraph-image-34.jpg';
import Image35 from '../../images/solargraphy/solargraph-image-35.jpg';
import Image36 from '../../images/solargraphy/solargraph-image-36.jpg';
import Image44 from '../../images/solargraphy/solargraph-image-44.jpg';
import Image50 from '../../images/solargraphy/solargraph-image-50.jpg';
import Image50Inverted from '../../images/solargraphy/solargraph-image-50-inverted.jpg';
import Image62 from '../../images/solargraphy/solargraph-image-62.jpg';
import Image73 from '../../images/solargraphy/solargraph-image-73.jpg';

export default function Solargraphy() {
	return (
		<Layout>
			<SEO title="Solargraphy" description="Pinhole photography aimed at the sky to capture the path of the sun each day" />
			<TitleBanner>
				<h1>Solargraphy</h1>
			</TitleBanner>
			<FullWidthImage img={Image35} imgAlt="Solargraph of my parents house in Herefordshire, with the road visible in the foreground" />
			<StandardCentralText headerText="The Sun written in silver">
				<p>Solargraphy is a photographic technique in which a fixed pinhole camera is pointed at the Sun and used to expose photographic paper for weeks, months or even years.</p>
			</StandardCentralText>
			<FullWidthImage img={Image34} imgAlt="Solargraph of my parents house in Herefordshire" />
			<StandardCentralText>
				<p>Due to the length of the exposure time, the movement of the sun across the sky is often visible, which each individual streak being the path the Sun took each day.</p>
			</StandardCentralText>
			<Morph>
				<img src={Image8} alt="Solargraph from my parents house in Herefordshire" />
				<img src={Image8NoStreaks} alt="Solargraph from my parents house in Herefordshire with no streaks" />
			</Morph>
			<StandardCentralText>
				<p>My solargraphy started as a hobby in 2012, but eventually became my 3rd year exhibition project at Aberystwyth University in 2014.</p>
				<p>During this time, I set up over 120 pinhole cameras across Herefordshire and Ceredigion resulting in 74 different solargraphs.</p>
			</StandardCentralText>
			<Morph>
				<img src={Image50} alt="Solargraph from my parents house that has been heavily affected by mould" />
				<img src={Image50Inverted} alt="Solargraph before it has been digitally inverted" />
			</Morph>
			<StandardCentralText>
				<p>Solargraphs have their iconic deep blue hue because when first retrieved from its pinhole camera, the photographic paper is a brown/orange because of its over-exposure to white light.</p>
				<p>As the paper is used as a negative and the brown is digitally inverted giving the final image its signature colour scheme.</p>
			</StandardCentralText>
			<FullWidthImage img={Image17} imgAlt="Solargraph that didn't catch any sun but does have interesting mould patterns" />
			<StandardCentralText>
				<p>For me the allure of solargraphs are their uniqueness. Although the camera is fixed, it evolves with the image as the world swirls around them with hundreds of different factors coming together to decide the apperance of the final image that has a story unlike any other medium of&nbsp;art.</p>
				<p>Despite the above Solargraph only being up for 2 months in 2012, mould started to eat the photographic paper's gelatine, causing the blank areas around the&nbsp;edges.</p>
			</StandardCentralText>
			<FullWidthImage img={Image44} imgAlt="Solargraph of Goodrich Castle" />
			<StandardCentralText>
				<p>While they are intended to be fixed, the cameras often get moved around which can leave multiple exposures of the Sun and the camera's surrounding area.</p>
				<p>Exposed between July 2012 and April 2013, 'Image 44' came from the least water logged camera of a batch of 4 that were positioned at Goodrich Castle, Herefordshire.</p>
			</StandardCentralText>
			<FullWidthImage img={Image62} imgAlt="Solargraph of the Aberystwyth coast featuring lots of insect faeces" />
			<StandardCentralText>
				<p>If the pinhole is large enough, insects will often nest in the camera and leave faeces on the paper. Birds and sheep can heavily damage cameras or destory them completely.</p>
				<p>Human error can also play a big part. My first three solargraphs were black and white because I mistakingly developed them chemically instead of scanning them immediately. Finger prints, hairs and ink feature in the solargraphs which I could have handled better.</p>
				<p>'Image 62' is one such Solargraph that features both insect activity and fingerprints. The camera was pointed towards the Aberystwyth coast between June and October 2013. The sea's horizon is just visible in the centre of the image and several exposures of cliffs can be seen beneath the Sun streaks.</p>
			</StandardCentralText>
			<FullWidthImage img={Image36} imgAlt="Solargraph of a field with a church in the background" />
			<StandardCentralText>
				<p>'Image 36' was exposed between August 2012 and April 2013. As the camera stayed very still during its exposure, there is a large amount of detail present including the village church on the horizon.</p>
				<p>This solargraph was my first that clearly shows seasonal change in the foliage. The sun streaks are hidden where the summer leaves used to be, but the leafless branches show clearly from the winter months.</p>
				<p>Unexplainable squiggly green marks feature in the foreground, adding even more character.</p>
			</StandardCentralText>
			<div className={SolarStyles.dualImages}>
				<div>
					<img src={Image28} alt="Solargraph of Aberystwyth" />
				</div>
				<div>
					<Morph>
						<img src={Image28ZoomView} alt="View of Aberystwyth to compare with the Solargraph" />
						<img src={Image28Zoom} alt="Cropped Solargraph of Aberystwyth" />
					</Morph>
				</div>
			</div>
			<StandardCentralText>
				<p>A pinhole camera's angle of vision is decided by the size of the pinhole and the size of the camera itself.</p>
				<p>Above is "Image 28", which shows just how large a solargraph's angle of vision can be. It seems to have kept relatively still during its exposure between May 2012 and September 2012, giving a great view of the Welsh coast.</p>
				<p>While it was pointed directly at Aberystwyth, its large angle of vision means that the town only takes up a small area in the centre of the solargraph.</p>
			</StandardCentralText>
			<FullWidthImage img={Image73} imgAlt="Solargraph of a field with the fence it is attached to clearly visible on the right" />
			<StandardCentralText>
				<p>"Image 73" boasts one of the highest levels of detail in any of my solargraphs.</p>
				<p>Although positioned for a relatively short exposure of 5 weeks in 2014, the camera appears to have stayed relatively still, giving a clear view of the fence that the camera was attached to.</p>
			</StandardCentralText>
		</Layout >
	);
}