import {
    Input
} from '@nextui-org/react';
import { useEffect, useState } from 'react';

export default function Search({ search }) {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        search(searchQuery);
    }, [searchQuery]);

    return (
        <>
            <Input
                aria-labelledby='search'
                clearable
                width="100%"
                bordered
                placeholder="Search..."
                color="primary"
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                }}
            />
        </>
    );
}