/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  ECR20,
  ECR20_Approval,
} from "generated";

const VITALIK_ADDRESS = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"

ECR20.Approval.handler(async ({ event, context }) => {

  const entity: ECR20_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
    srcAddress: event.srcAddress,
    transactionIndex: event.transaction.transactionIndex,
    hash: event.transaction.hash,
    to: event.transaction.to ?? "",
    from: event.transaction.from ?? "", 
    parentHash: event.block.parentHash,
    transactionsRoot: event.block.transactionsRoot
  };
  

  context.ECR20_Approval.set(entity);
}, {wildcard: true, eventFilters: { owner: VITALIK_ADDRESS }});
