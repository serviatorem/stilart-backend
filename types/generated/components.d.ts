import type { Schema, Attribute } from '@strapi/strapi';

export interface ServiceMoreDescription extends Schema.Component {
  collectionName: 'components_service_more_descriptions';
  info: {
    displayName: 'description';
  };
  attributes: {};
}

export interface ServiceMoreServiceMore extends Schema.Component {
  collectionName: 'components_service_more_service_mores';
  info: {
    displayName: 'service_more';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'service-more.description': ServiceMoreDescription;
      'service-more.service-more': ServiceMoreServiceMore;
    }
  }
}
