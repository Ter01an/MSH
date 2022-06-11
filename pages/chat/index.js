import ChatWidget from "../../components/ChatWidget";
import LayoutDefault from "../../components/Layout";

export default function Chat() {
    return (
        <>
            <ChatWidget/>
        </>
    )
}

Chat.getLayout = page => <LayoutDefault>{page}</LayoutDefault>;