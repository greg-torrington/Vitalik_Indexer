/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  ECR20,
  ECR20_Approval,
} from "generated";

ECR20.Approval.handler(async ({ event, context }) => {
  const entity: ECR20_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.ECR20_Approval.set(entity);
}, {wildcard: true});
