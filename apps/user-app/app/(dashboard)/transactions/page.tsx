import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getOnRampTransactions } from "../transfer/page";

export default async function() {
    const transactions = await getOnRampTransactions();
    return <div>
        <div className="content-center">
            <OnRampTransactions transactions={transactions} />
        </div>
    </div>
}