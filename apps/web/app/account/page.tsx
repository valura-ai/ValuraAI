import { handleSignOutAction } from "@web/api/handler/signout";
import { Navbar } from "@web/components/Navbar";
import Footer from "@web/landing/components/layout/Footer";
import { withAuth } from "@workos-inc/authkit-nextjs";


export default async function AccountPage() {
  const { user, role, permissions } = await withAuth({ ensureSignedIn: true });
  console.log()

  const userFields = [
    ["First name", user?.firstName],
    ["Last name", user?.lastName],
    ["Email", user?.email],
    role ? ["Role", role] : [],
    permissions ? ["Permissions", permissions] : [],
    ["Id", user?.id],
  ].filter((arr) => arr.length > 0);

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Account details</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Below are your account details
        </p>
        {userFields && (
          <div className="flex flex-col gap-4 w-full">
            {userFields.map(([label, value]) => (
              <div className="flex items-center gap-4" key={String(label)}>
                <span className="font-semibold w-32 text-gray-800">{label}</span>
                <input
                  className="flex-1 border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-700"
                  value={String(value) || ""}
                  readOnly
                />
              </div>
            ))}
          </div>
        )}
        <form
          action={handleSignOutAction}
          className="w-full mt-8 flex justify-center"
        >
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full transition cursor-pointer"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
     <Footer />
    
    </>
  );
}
