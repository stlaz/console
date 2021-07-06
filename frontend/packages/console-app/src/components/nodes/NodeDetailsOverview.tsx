import * as React from 'react';
import { Button } from '@patternfly/react-core';
import { PencilAltIcon } from '@patternfly/react-icons';
import * as _ from 'lodash';
import { useTranslation } from 'react-i18next';
import {
  useAccessReview,
  SectionHeading,
  LabelList,
  Kebab,
  ResourceLink,
  cloudProviderNames,
  cloudProviderID,
  Timestamp,
} from '@console/internal/components/utils';
import { NodeModel, MachineModel } from '@console/internal/models';
import { NodeKind, referenceForModel } from '@console/internal/module/k8s';
import { getNodeMachineNameAndNamespace, getNodeAddresses } from '@console/shared';
import NodeIPList from './NodeIPList';
import NodeStatus from './NodeStatus';
import MarkAsSchedulablePopover from './popovers/MarkAsSchedulablePopover';

type NodeDetailsOverviewProps = {
  node: NodeKind;
};

const NodeDetailsOverview: React.FC<NodeDetailsOverviewProps> = ({ node }) => {
  const machine = getNodeMachineNameAndNamespace(node);
  const canUpdate = useAccessReview({
    group: NodeModel.apiGroup,
    resource: NodeModel.plural,
    verb: 'patch',
    name: node.metadata.name,
    namespace: node.metadata.namespace,
  });
  const { t } = useTranslation();

  return (
    <div className="co-m-pane__body">
      <SectionHeading text={t('console-app~Node details')} />
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <dl className="co-m-pane__details">
            <dt>{t('console-app~Node name')}</dt>
            <dd>{node.metadata.name || '-'}</dd>
            <dt>{t('console-app~Status')}</dt>
            <dd>
              {!node.spec.unschedulable ? (
                <NodeStatus node={node} showPopovers />
              ) : (
                <MarkAsSchedulablePopover node={node} />
              )}
            </dd>
            <dt>{t('console-app~External ID')}</dt>
            <dd>{_.get(node, 'spec.externalID', '-')}</dd>
            <dt>{t('console-app~Node addresses')}</dt>
            <dd>
              <NodeIPList ips={getNodeAddresses(node)} expand />
            </dd>
            <dt>{t('console-app~Node labels')}</dt>
            <dd>
              <LabelList kind="Node" labels={node.metadata.labels} />
            </dd>
            <dt>{t('console-app~Taints')}</dt>
            <dd>
              {canUpdate ? (
                <Button
                  variant="link"
                  type="button"
                  isInline
                  onClick={Kebab.factory.ModifyTaints(NodeModel, node).callback}
                >
                  {_.size(node.spec.taints)}{' '}
                  {t('console-app~Taint', { count: _.size(node.spec.taints) })}
                  <PencilAltIcon className="co-icon-space-l pf-c-button-icon--plain" />
                </Button>
              ) : (
                <span>
                  {_.size(node.spec.taints)}{' '}
                  {t('console-app~Taint', { count: _.size(node.spec.taints) })}
                </span>
              )}
            </dd>
            <dt>{t('console-app~Annotations')}</dt>
            <dd>
              {canUpdate ? (
                <Button
                  variant="link"
                  type="button"
                  isInline
                  onClick={Kebab.factory.ModifyAnnotations(NodeModel, node).callback}
                >
                  {_.size(node.metadata.annotations)}{' '}
                  {t('console-app~Annotation', { count: _.size(node.metadata.annotations) })}
                  <PencilAltIcon className="co-icon-space-l pf-c-button-icon--plain" />
                </Button>
              ) : (
                <span>
                  {_.size(node.metadata.annotations)}{' '}
                  {t('console-app~Annotation', { count: _.size(node.metadata.annotations) })}
                </span>
              )}
            </dd>
            {machine.name && (
              <>
                <dt>{t('console-app~Machine')}</dt>
                <dd>
                  <ResourceLink
                    kind={referenceForModel(MachineModel)}
                    name={machine.name}
                    namespace={machine.namespace}
                  />
                </dd>
              </>
            )}
            <dt>{t('console-app~Provider ID')}</dt>
            <dd>{cloudProviderNames([cloudProviderID(node)])}</dd>
            {_.has(node, 'spec.unschedulable') && <dt>{t('console-app~Unschedulable')}</dt>}
            {_.has(node, 'spec.unschedulable') && (
              <dd className="text-capitalize">
                {_.get(node, 'spec.unschedulable', '-').toString()}
              </dd>
            )}
            <dt>{t('console-app~Created')}</dt>
            <dd>
              <Timestamp timestamp={node.metadata.creationTimestamp} />
            </dd>
          </dl>
        </div>
        <div className="col-md-6 col-xs-12">
          <dl className="co-m-pane__details">
            <dt>{t('console-app~Operating system')}</dt>
            <dd className="text-capitalize">
              {_.get(node, 'status.nodeInfo.operatingSystem', '-')}
            </dd>
            <dt>{t('console-app~OS image')}</dt>
            <dd>{_.get(node, 'status.nodeInfo.osImage', '-')}</dd>
            <dt>{t('console-app~Architecture')}</dt>
            <dd className="text-uppercase">{_.get(node, 'status.nodeInfo.architecture', '-')}</dd>
            <dt>{t('console-app~Kernel version')}</dt>
            <dd>{_.get(node, 'status.nodeInfo.kernelVersion', '-')}</dd>
            <dt>{t('console-app~Boot ID')}</dt>
            <dd>{_.get(node, 'status.nodeInfo.bootID', '-')}</dd>
            <dt>{t('console-app~Container runtime')}</dt>
            <dd>{_.get(node, 'status.nodeInfo.containerRuntimeVersion', '-')}</dd>
            <dt>{t('console-app~Kubelet version')}</dt>
            <dd>{_.get(node, 'status.nodeInfo.kubeletVersion', '-')}</dd>
            <dt>{t('console-app~Kube-Proxy version')}</dt>
            <dd>{_.get(node, 'status.nodeInfo.kubeProxyVersion', '-')}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default NodeDetailsOverview;
