import RootLayout from "@/-components/layout";

export default function Appointments() {
    return (
        <>
        <RootLayout>
        <div>
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-center">
      <thead className="ltr:text-center rtl:text-center">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Appointment Id</th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Doctors Name</th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Appointment</th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Time of the Appointment</th>
          <th className="px-4 py-2"></th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200 text-center">
        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">1</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">John Doe</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
          <td className="whitespace-nowrap px-4 py-2">
          <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Reschedule
            </a>
            <a
              href="#"
              className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700 ml-2"
            >
              Cancel
            </a>
          </td>
        </tr>

        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">2</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">osamah</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
          <td className="whitespace-nowrap px-4 py-2">
          <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Reschedule
            </a>
            <a
              href="#"
              className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700 ml-2"
            >
              Cancel
            </a>
          </td>
        </tr>

        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">3</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">abdullah</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700"></td>
          <td className="whitespace-nowrap px-4 py-2">
            <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Reschedule
            </a>
            <a
              href="#"
              className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700 ml-2"
            >
              Cancel
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </RootLayout>
        </>
    
    );
  }