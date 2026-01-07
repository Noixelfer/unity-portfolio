const PLATFORM_LABELS = {
    android: "Google Play",
    ios: "App Store",
    nintendo: "Nintendo eShop",
    playstation: "PlayStation Store",
    xbox: "Xbox Store",
    steam: "Steam",
}

export default function StoreLinks({ stores }) {
    if (!stores || stores.length === 0) return null

    return (
        <div className="mt-6 flex flex-wrap gap-3">
            {stores.map(store => (
                <a
                    key={store.platform}
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium hover:bg-indigo-400 transition"
                >
                    {store.label ?? PLATFORM_LABELS[store.platform]}
                </a>
            ))}
        </div>
    )
}
