import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButtonWLinkWIcon extends Schema.Component {
  collectionName: 'components_button_button_w_link_w_icons';
  info: {
    displayName: 'ButtonWLinkWIcon';
  };
  attributes: {
    key: Attribute.String;
    text: Attribute.String;
    icon: Attribute.String;
    link: Attribute.Text;
  };
}

export interface CardCard extends Schema.Component {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    key: Attribute.String;
    leftHeader: Attribute.String;
    leftHeaderDescription: Attribute.Text;
    divider: Attribute.Boolean;
    leftDescripition: Attribute.Text;
    rightHeaderDescripition: Attribute.Text;
    rightFooterHeader: Attribute.String;
    rightFooterDescripition: Attribute.Text;
    ButtonText: Attribute.String;
    ButtonLink: Attribute.String;
    ButtonIcon: Attribute.String;
  };
}

export interface ListListOCard extends Schema.Component {
  collectionName: 'components_list_list_o_cards';
  info: {
    displayName: 'list OCard';
    description: '';
  };
  attributes: {
    OCard: Attribute.Component<'card.card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.button-w-link-w-icon': ButtonButtonWLinkWIcon;
      'card.card': CardCard;
      'list.list-o-card': ListListOCard;
    }
  }
}
