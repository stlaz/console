export const eventingPO = {
  createEventDropDownMenu: '[data-test-id="dropdown-button"]',
  createEventSource: '[data-test-dropdown-menu="eventSource"]',
  createKnativeEvent: '[data-test="item knative-event-source"]',
  yamlEditor: 'div.monaco-scrollable-element.editor-scrollable.vs-dark',
  catlogTiles: '.odc-catalog-tile',
  eventSourceCard: '[data-test="item knative-event-source"]',
  createCatalog: '.co-catalog-page__overlay-actions',
  radioButtonresourceURI: '[id="form-radiobutton-formData-sinkType-uri-field"]',
  resourceURI: '[id="form-input-formData-sink-uri-field"]',
  createConnector: '[data-test=save-changes]',
  awsSqsSource: {
    accessKey: '[id="root_accessKey"]',
    queueName: '[id="root_queueNameOrArn"]',
    region: '[id="root_region"]',
    secretKey: '[id="root_secretKey"]',
  },
  saleforceSource: {
    clientId: '[id="root_clientId"]',
    clientSecret: '[id="root_clientSecret"]',
    password: '[id="root_password"]',
    query: '[id="root_query"]',
    topicName: '[id="root_topicName"]',
    userName: '[id="root_userName"]',
  },
  jiraSource: {
    jiraURL: '[id="root_jiraUrl"]',
    password: '[id="root_password"]',
    userName: '[id="root_username"]',
    jql: '[id="root_jql"]',
  },
  telegramSource: {
    authToken: '[id="root_authorizationToken"]',
  },
  slackSource: {
    channel: '[id="root_channel"]',
    token: '[id="root_token"]',
  },
  awsKinesisSource: {
    accessKey: '[id="root_accessKey"]',
    region: '[id="root_region"]',
    secretKey: '[id="root_secretKey"]',
    stream: '[id="root_stream"]',
  },
  createSidebar: '.co-catalog-page__overlay-actions',
  pingSource: {
    create: '[data-test="EventSource-PingSource"]',
    dataField: '#form-input-formData-data-PingSource-data-field',
    scheduleField: '#form-input-formData-data-PingSource-schedule-field',
    resource: '#form-ns-dropdown-formData-sink-key-field',
    resourceFilter: '[data-test-id="dropdown-text-filter"]',
    resourceItem: '[data-test="dropdown-menu-item-link"]',
    submit: '[data-test-id="submit-button"]',
    details: '[id="nodejs-ex-git-app-PingSource"]',
    save: '[data-test="save-changes"]',
  },
  apiServerSource: {
    create: '[data-test="EventSource-ApiServerSource"]',
    apiVersionField: '[data-test="pairs-list-name"]',
    kindField: '[data-test="pairs-list-value"]',
    resource: '#form-ns-dropdown-formData-sink-key-field',
    resourceItem: '[data-test="dropdown-menu-item-link"]',
    submit: '[data-test-id="submit-button"]',
    details: '[id="sources.knative.dev~v1~ApiServerSource"]',
  },
  sinkBinding: {
    create: '[data-test="EventSource-SinkBinding"]',
    apiVersionField: '[data-test-id="sinkbinding-apiversion-field"]',
    kindField: '[data-test-id="sinkbinding-kind-field"]',
    resource: '#form-ns-dropdown-formData-sink-key-field',
    resourceItem: '[data-test="dropdown-menu-item-link"]',
    submit: '[data-test-id="submit-button"]',
    details: '[id="sources.knative.dev~v1~SinkBinding"]',
  },
  containerSource: {
    create: '[data-test="EventSource-ContainerSource"]',
    imageField: '[data-test-id="container-image-field"]',
    resource: '#form-ns-dropdown-formData-sink-key-field',
    resourceItem: '[data-test="dropdown-menu-item-link"]',
    submit: '[data-test-id="submit-button"]',
    details: '[id="sources.knative.dev~v1~ContainerSource"]',
  },
  channel: {
    createChannel: '[data-test-dropdown-menu="channels"]',
    details: '[id="nodejs-ex-git-app-Channel"]',
    submit: '[data-test="save-changes"]',
    typeField: '[id="form-dropdown-formData-type-field"]',
    typeFieldMenu: '[data-test-id="dropdown-menu"]',
    name: '[data-test-id="channel-name"]',
    create: '[data-test-id="submit-button"]',
    tab: '[data-test-id="horizontal-link-Channels"]',
    channelfilter: '[data-test-row-filter="channel"]',
    inmemorychannelfilter: '[data-test-row-filter="inmemorychannel"]',
    createDropDownDefaultChannel: '[data-test-dropdown-menu="messaging.knative.dev~v1~Channel"]',
    createDropDownInMemoryChannel:
      '[data-test-dropdown-menu="messaging.knative.dev~v1~InMemoryChannel"]',
  },
  broker: {
    actionDropDown: '.pf-c-menu__list-item',
    actionMenu: '[data-test-id="actions-menu-button"]',
    formView: '[id="form-radiobutton-editorType-form-field"]',
    eventingCard: '[data-test="card eventing"]',
    createEvent: '[data-test="item knative-eventing-broker"]',
    create: '[data-test=save-changes]',
    label: '.tags',
    labelList: '[data-test="label-list"]',
    topologyNode: '[class="pf-topology__node__label"]',
    confirm: '[data-test="confirm-action"]',
    addAnnotations: '[data-test="add-button"]',
    editAnnotations: '[data-test="edit-annotations"]',
    annotationName: '[data-test="pairs-list-name"]',
    annotationValue: '[data-test="pairs-list-value"]',
    sidebar: {
      owners: '[data-test="Owner"]',
      createdAt: '[data-test="Created at"]',
      labels: '[data-test="Labels"]',
      annotations: '[data-test="Annotations"]',
      heading: '.sidebar__section-heading',
      navBar: '.co-m-horizontal-nav__menu-item',
      dropdownMenu: '.pf-c-dropdown__menu-item',
      resource: '.co-resource-item__resource-name',
      close: '[data-test-id="sidebar-close-button"]',
      triggerName: '[id="form-input-metadata-name-field"]',
      subscriberDropDown: '[id="form-ns-dropdown-spec-subscriber-ref-name-field"]',
      subscriberFilter: '[data-test-id="dropdown-text-filter"]',
      subscriberItem: '[data-test="dropdown-menu-item-link"]',
    },
    applicationGrouping: {
      dropdown: '[id="form-dropdown-application-name-field"]',
      nameField: '[data-test-id="application-form-app-name"]',
      formData: '[id="form-input-formData-application-name-field"]',
      create: '[id="#CREATE_APPLICATION_KEY#-link"]',
      menu: '[class="pf-c-dropdown__menu-item"]',
      nameForm: '[id="form-input-application-name-field"]',
    },
  },
  catalogSidebarCreateButton: 'a[role="button"]',
  message: '[data-test="empty-message"]',
  pageDetails: '.pf-c-breadcrumb',
  eventSourcesTab: '[data-test-id="horizontal-link-Event Sources"]',
  brokersTab: '[data-test-id="horizontal-link-Brokers"]',
  triggersTab: '[data-test-id="horizontal-link-Triggers"]',
  channelsTab: '[data-test-id="horizontal-link-Channels"]',
  subscriptionsTab: '[data-test-id="horizontal-link-Subscriptions"]',
  filter: {
    ToggleButton: '[data-test-id="filter-dropdown-toggle"]',
    Input: '[data-test="name-filter-input"]',
    labelInput: '[data-test-id="item-filter"]',
    Toolbar: '[data-test="filter-toolbar"]',
    TypeMenu: '[data-test-id="dropdown-button"]',
    Type: '[data-test-id="dropdown-menu"]',
    count: '.pf-c-badge',
    item: '.co-filter-dropdown-item__name',
    apiserversource: '[data-test-row-filter="apiserversource"]',
    containersource: '[data-test-row-filter="containersource"]',
    pingsource: '[data-test-row-filter="pingsource"]',
    sinkbinding: '[data-test-row-filter="sinkbinding"]',
    labelSuggestion: '.co-suggestion-line',
    checkbox: '.pf-c-check__input',
  },
  resourceIcon: '.co-m-resource-icon',
  resourceType: '[data-test-rows="resource-row"]',
};

export const servingPO = {
  create: '[data-test="save-changes"]',
  servicesTab: '[data-test-id="horizontal-link-Services"]',
  revisionsTab: '[data-test-id="horizontal-link-Revisions"]',
  routesTab: '[data-test-id="horizontal-link-Routes"]',
  pageDetails: '.pf-c-breadcrumb',
  resourceName: '.co-resource-item__resource-name',
  createService: '[data-test-dropdown-menu="service"]',
  kebabButton: '[data-test-id="kebab-button"]',
  filter: {
    Input: '[data-test="name-filter-input"]',
    Toolbar: '[data-test="filter-toolbar"]',
    TypeMenu: '[data-test-id="dropdown-button"]',
    Type: '[data-test-id="dropdown-menu"]',
    item: '.co-filter-dropdown-item__name',
    count: '.pf-c-badge',
    ToggleButton: '[data-test-id="filter-dropdown-toggle"]',
    channel: '[data-test-row-filter="channel"]',
    inmemorychannel: '[data-test-row-filter="inmemorychannel"]',
  },
};
