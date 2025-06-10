export default async function blogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (
        <div>
            <h1>歡迎到Blog {slug}</h1>
        </div>
    )
};