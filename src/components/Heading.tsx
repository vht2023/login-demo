const Heading = () => {
    return (
        <div>
            <div className="flex flex-col text-2xl font-bold leading-tight">
                <span>Welcome to Panorama,</span>
                <span>Sign In to Continue.</span>
            </div>
            <div className="flex flex-col sm:mt-6 mt-4 text-base">
                <div>
                    <span>Don't have account?</span>
                    <span className="ml-1 cursor-pointer underline font-semibold">Create an account</span>
                </div>
                <span>It takes less than a minute.</span>
            </div>
        </div>
    )
}

export default Heading;
