
import { Bell } from 'lucide-react';
export default function Gell () {
    return(
      <>
           {/* Floating Notification Bell */}
      <div className="fixed bottom-0 left-8">
        <button className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
          <Bell size={20} />
        </button>
      </div>
      </>
    )
}