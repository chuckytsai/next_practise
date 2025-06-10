type Props = {
    params: {
        slug: string;
    };
};

export default async function blogPage({ params }: Props) {
    const { slug } = params;

    return (
        <div>
            <h1>歡迎到Blog {slug}</h1>
        </div>
    )
};