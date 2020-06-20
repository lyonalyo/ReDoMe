import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {Button, Group, CellButton, FormLayout, Textarea, File} from '@vkontakte/vkui';

import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import PanelHeaderContent from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';

import logo from "../img/logo.png";
import './logoheader.css';

const osName = platform();

const ClientForm = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="client">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		><img class="LogoHeader" src={logo} alt="RE-DO-ME" /></PanelHeader>


		<Group>
			<FormLayout>

				<File top="Загрузите ваше фото" before={<Icon24Camera />} size="xl">
					Открыть галерею
				</File>

				<File top="Загрузите желаемое фото" before={<Icon24Camera />} size="xl">
					Открыть галерею
				</File>


				<Div>
					<Button size="xl" level="2" onClick={go} data-to="youlikestar">
						Найти похожую звезду
					</Button>
				</Div>
				<Textarea top="Ваш комментарий" placeholder="Хочу стрижку! Хочу макияж! Хочу укладку!" />

				<Div>
					<Button size="xl" level="2" onClick={go} data-to="persik">
						Поиск мастера
					</Button>
				</Div>
			</FormLayout>
		</Group>
	</Panel>
);

ClientForm.propTypes = {
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

export default ClientForm;
