import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {Button, Group, Header, Banner, SimpleCell, InfoRow} from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Banner from '@vkontakte/vkui/dist/components/Banner/Banner';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import logo from "../img/logosmall.png";


const osName = platform();

const Offers = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		><img width={100} src={logo} alt="RE-DO-ME" /></PanelHeader>

		<Group>
			<SimpleCell>
				<InfoRow header="Ваша цель:">
					Хочу сбрить усы!
				</InfoRow>
			</SimpleCell>
		</Group>
		<Group>
			<Header mode="secondary">Предложения мастеров</Header>
			<Banner
				before={<Avatar size={96} mode="image" src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg" />}
				header="Костя Плюхин"
				subheader="Барбер"
				actions={
					<React.Fragment>
						<Button>Собщение</Button>
						<Button>Записаться</Button>
					</React.Fragment>
				}
			/>
		</Group>
	</Panel>
);

Offers.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Offers;
