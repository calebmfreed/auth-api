import { transactionApprovalService } from '../services/auth';
import { transaction } from './api/transactions/transactions';
import { customers } from './api/customers';

const transaction = transaction();
const customer = customers();

const transactionApprovalResult = transactionApprovalService(transaction, customer);

if (transactionApprovalResult.approved) {
  return {
    status: 200,
    message: "Your transaction has been approved! Thanks for using a Capital One Card",
  }
} else {
  return {
    status: 400,
    message: "Your transaction has been declined. We're sorry about that."
  }
}

server.run();