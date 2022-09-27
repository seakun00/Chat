import React, {
    KeyboardEvent,
    UIEvent,
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    TextField,
} from '@mui/material';
import { useQuery } from 'react-query';
import { Chat, getChats } from '@/ts/http/chat';
import { ErrorAlert } from '@/ts/layout/Error';
import { Loading } from '@/ts/layout/Loading';
import SearchIcon from '@mui/icons-material/Search';

export const Chats = () => {
    const rows = 20;
    const [offset, setOffset] = useState(0);
    const [name, setName] = useState('');
    const [chats, setChats] = useState<Chat[]>([]);
    const { isLoading, isError } = useQuery<Chat[], Error>(
        ['chats', offset, name],
        () => {
            return getChats(rows, offset, name);
        },
        {
            onSuccess: (data) => {
                const removeDuplicate = (fetchedChats: Chat[]): Chat[] =>
                    fetchedChats.filter((fetchedChat) => {
                        const isRegistered = chats.some((chat) => {
                            return chat.id === fetchedChat.id;
                        });
                        return !isRegistered;
                    });

                const fetchedChats = removeDuplicate(data);
                setChats([...chats, ...fetchedChats]);
            },
        }
    );

    if (isError) {
        return <ErrorAlert />
    } else {
        return (
            <Stack spacing={2} sx={{ height: '100%' }}>
                <SearchBar
                    setName={setName}
                    setOffset={setOffset}
                    setChats={setChats}
                />
                <ChatList
                    rows={rows}
                    offset={offset}
                    setOffset={setOffset}
                    isLoading={isLoading}
                    chats={chats}
                />
            </Stack>
        );
    }
};

type SearchBarProps = {
    setName: (name: string) => void;
    setOffset: (offset: number) => void;
    setChats: (chats: Chat[]) => void;
};

const SearchBar = (props: SearchBarProps) => {
    const { setName, setOffset, setChats } = props;

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && event.target instanceof HTMLInputElement) {
            setName(event.target.value);
            setOffset(0);
            setChats([]);
        }
    };

    return (
        <TextField
            variant="standard"
            margin="normal"
            InputProps={{
                startAdornment: <SearchIcon />,
            }}
            onKeyDown={handleKeyDown}
        />
    );
};

type ChatListProps = {
    rows: number;
    offset: number;
    setOffset: (offset: number) => void;
    isLoading: boolean;
    chats: Chat[];
};

const ChatList = (props: ChatListProps) => {
    const { rows, offset, setOffset, isLoading, chats } = props;
    const chatList = useRef<HTMLUListElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number | null>(null);

    useEffect(() => {
        scrollPosition && chatList.current?.scroll(0, scrollPosition);
    }, [chats]);

    const handleScroll = (event: UIEvent<HTMLUListElement>) => {
        const ul = event.currentTarget;
        const isBottom = ul.scrollTop + ul.offsetHeight === ul.scrollHeight;
        if (isBottom) {
            setScrollPosition(ul.scrollTop);
            setOffset(offset + rows);
        }
    };

    if (chats.length > 0) {
        return (
            <List
                ref={chatList}
                onScroll={handleScroll}
                sx={{
                    height: '100%',
                    overflow: 'auto',
                }}
            >
                {chats.map((chat, index) => (
                    <ListItem disablePadding key={index}>
                        <ListItemButton
                            component="a"
                            href={`/chats/${chat.id}`}
                        >
                            <ListItemText primary={chat.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        );
    } else if (isLoading) {
        return <Loading />;
    } else {
        return null;
    }
};
