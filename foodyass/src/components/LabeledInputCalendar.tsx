"use client";

import React, { useState, useRef, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight, Edit3, X } from "lucide-react";

interface LabeledInputCalendarProps {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  bgColor?: string;
  isDisabled?: boolean;
  isOldDaysBlocked?: boolean;
  isUpcomingDaysBlocked?: boolean;
  className?: string;
}

const LabeledInputCalendar: React.FC<LabeledInputCalendarProps> = ({
  label,
  name,
  value,
  onChange,
  isError = false,
  bgColor = "",
  isDisabled = false,
  isOldDaysBlocked = false,
  isUpcomingDaysBlocked = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentMonth, setCurrentMonth] = useState(
    value ? new Date(value) : new Date(),
  );
  const [manualInput, setManualInput] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [viewMode, setViewMode] = useState<"days" | "months" | "years">("days");
  const [showManualEntry, setShowManualEntry] = useState<boolean>(false);

  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  useEffect(() => {
    if (isOpen && value) {
      const date = new Date(value);
      setManualInput({
        day: String(date.getDate()).padStart(2, "0"),
        month: String(date.getMonth() + 1).padStart(2, "0"),
        year: String(date.getFullYear()),
      });
    } else if (isOpen && !value) {
      setManualInput({ day: "", month: "", year: "" });
    }
    setViewMode("days");
    setShowManualEntry(false);
  }, [isOpen, value]);

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatDisplayDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getDaysInMonth = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: Date[] = [];

    const startDay = firstDay.getDay();
    for (let i = 0; i < startDay; i++) {
      const prevDate = new Date(year, month, -i);
      days.unshift(prevDate);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }

    return days;
  };

  const isDateDisabled = (date: Date): boolean => {
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);

    if (isOldDaysBlocked && checkDate < today) return true;
    if (isUpcomingDaysBlocked && checkDate > today) return true;
    return false;
  };

  const handleManualInputChange = (
    field: "day" | "month" | "year",
    inputValue: string,
  ) => {
    if (inputValue && !/^\d+$/.test(inputValue)) return;

    const newValue = inputValue;

    if (field === "day") {
      if (inputValue.length > 2) return;
      setManualInput((prev) => ({ ...prev, day: newValue }));

      if (inputValue.length === 2) {
        monthRef.current?.focus();
      }
    } else if (field === "month") {
      if (inputValue.length > 2) return;
      setManualInput((prev) => ({ ...prev, month: newValue }));

      if (inputValue.length === 2) {
        yearRef.current?.focus();
      }
    } else if (field === "year") {
      if (inputValue.length > 4) return;
      setManualInput((prev) => ({ ...prev, year: newValue }));
    }
  };

  const applyManualDate = () => {
    const { day, month, year } = manualInput;

    if (day.length === 2 && month.length === 2 && year.length === 4) {
      const dateStr = `${year}-${month}-${day}`;
      const date = new Date(dateStr);

      if (
        !isNaN(date.getTime()) &&
        date.getDate() === parseInt(day) &&
        date.getMonth() + 1 === parseInt(month) &&
        date.getFullYear() === parseInt(year)
      ) {
        if (isDateDisabled(date)) {
          alert("Date is not available");
          return;
        }

        const syntheticEvent = {
          target: {
            name,
            value: dateStr,
          },
        } as React.ChangeEvent<HTMLInputElement>;

        onChange(syntheticEvent);
        setIsOpen(false);
      } else {
        alert("Please enter a valid date");
      }
    } else {
      alert("Please complete the date");
    }
  };

  const handleDateSelect = (date: Date) => {
    if (isDateDisabled(date)) return;

    const formattedDate = formatDate(date);
    const syntheticEvent = {
      target: {
        name,
        value: formattedDate,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(syntheticEvent);
    setIsOpen(false);
  };

  const handleMonthSelect = (monthIndex: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), monthIndex, 1));
    setViewMode("days");
  };

  const handleYearSelect = (year: number) => {
    setCurrentMonth(new Date(year, currentMonth.getMonth(), 1));
    setViewMode("months");
  };

  const handlePrevYear = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear() - 1, currentMonth.getMonth(), 1),
    );
  };

  const handleNextYear = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear() + 1, currentMonth.getMonth(), 1),
    );
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  const handlePrevYearRange = () => {
    const newYear = currentMonth.getFullYear() - 20;
    setCurrentMonth(new Date(newYear, currentMonth.getMonth(), 1));
  };

  const handleNextYearRange = () => {
    const newYear = currentMonth.getFullYear() + 20;
    setCurrentMonth(new Date(newYear, currentMonth.getMonth(), 1));
  };

  const getYearsRange = (): number[] => {
    const currentYear = currentMonth.getFullYear();
    const startYear = currentYear - 10;
    const years: number[] = [];

    for (let i = 0; i < 20; i++) {
      years.push(startYear + i);
    }

    return years;
  };

  const days = getDaysInMonth(currentMonth);
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const isSelectedDate = (date: Date): boolean => {
    if (!value) return false;
    return formatDate(date) === value;
  };

  const isToday = (date: Date): boolean => {
    return formatDate(date) === formatDate(today);
  };

  const isCurrentMonth = (date: Date): boolean => {
    return date.getMonth() === currentMonth.getMonth();
  };

  const renderDaysView = () => (
    <>
      {!showManualEntry && (
        <div className="overflow-y-auto scroll-container max-h-[calc(100vh-200px)]">
          <div className="text-center mb-4">
            <button
              onClick={() => setShowManualEntry(true)}
              className="inline-flex items-center gap-2 text-label-medium text-light-primary dark:text-dark-primary hover:underline">
              <Edit3 className="w-4 h-4" />
              Enter Date Manually
            </button>
          </div>

          {/* Week Days */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {weekDays.map((day) => (
              <div
                key={day}
                className="text-center text-label-small font-medium text-light-on-surface-variant dark:text-dark-on-surface-variant py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((date, index) => {
              const disabled = isDateDisabled(date);
              const selected = isSelectedDate(date);
              const todayDate = isToday(date);
              const currentMonthDay = isCurrentMonth(date);

              return (
                <button
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  disabled={disabled}
                  className={`
                    aspect-square rounded-lg text-body-medium font-medium transition-all ${
                      !currentMonthDay
                        ? "text-light-outline dark:text-dark-outline"
                        : ""
                    } ${
                      disabled
                        ? "opacity-30 cursor-not-allowed"
                        : "hover:bg-light-surface-variant dark:hover:bg-dark-surface-variant cursor-pointer"
                    } ${
                      selected
                        ? "bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary"
                        : todayDate
                          ? "border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary"
                          : "text-light-on-surface dark:text-dark-on-surface"
                    }
                  `}>
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {showManualEntry && (
        <div className="mb-4 bg-light-surface-variant dark:bg-dark-surface-variant rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-title-small text-light-on-surface dark:text-dark-on-surface">
              <Edit3 className="w-5 h-5" />
              Enter Date Manually
            </div>
            <button
              onClick={() => setShowManualEntry(false)}
              className="p-2 hover:bg-light-surface dark:hover:bg-dark-surface rounded-full transition-all">
              <X className="w-5 h-5 text-light-on-surface-variant dark:text-dark-on-surface-variant" />
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <input
              ref={dayRef}
              type="text"
              placeholder="DD"
              value={manualInput.day}
              onChange={(e) => handleManualInputChange("day", e.target.value)}
              maxLength={2}
              className="bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface text-body-large w-12 h-12 text-center rounded outline-none border border-light-outline dark:border-dark-outline focus:border-light-primary dark:focus:border-dark-primary transition-all"
            />
            <span className="text-xl text-light-on-surface-variant dark:text-dark-on-surface-variant">
              /
            </span>

            <input
              ref={monthRef}
              type="text"
              placeholder="MM"
              value={manualInput.month}
              onChange={(e) => handleManualInputChange("month", e.target.value)}
              maxLength={2}
              className="bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface text-body-large w-12 h-12 text-center rounded outline-none border border-light-outline dark:border-dark-outline focus:border-light-primary dark:focus:border-dark-primary transition-all"
            />
            <span className="text-xl text-light-on-surface-variant dark:text-dark-on-surface-variant">
              /
            </span>

            <input
              ref={yearRef}
              type="text"
              placeholder="YYYY"
              value={manualInput.year}
              onChange={(e) => handleManualInputChange("year", e.target.value)}
              maxLength={4}
              className="bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface text-body-large w-20 h-12 text-center rounded outline-none border border-light-outline dark:border-dark-outline focus:border-light-primary dark:focus:border-dark-primary transition-all"
            />
          </div>
          <button
            onClick={applyManualDate}
            className="mt-4 w-full h-10 bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary rounded-full text-label-large font-medium hover:shadow-md transition-all">
            Apply Date
          </button>
        </div>
      )}
    </>
  );

  const renderMonthsView = () => (
    <div className="overflow-y-auto scroll-container max-h-[calc(100vh-200px)]">
      <div className="grid grid-cols-4 gap-3">
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => handleMonthSelect(index)}
            className={`
            aspect-square rounded-lg text-body-medium font-medium transition-all hover:bg-light-surface-variant dark:hover:bg-dark-surface-variant ${
              currentMonth.getMonth() === index
                ? "bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary"
                : "text-light-on-surface dark:text-dark-on-surface"
            }
          `}>
            {month}
          </button>
        ))}
      </div>
    </div>
  );

  const renderYearsView = () => {
    const years = getYearsRange();
    const currentYear = currentMonth.getFullYear();

    return (
      <div className="overflow-y-auto scroll-container max-h-[calc(100vh-200px)]">
        <div className="grid grid-cols-4 gap-3">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => handleYearSelect(year)}
              className={`aspect-square rounded-lg text-body-medium font-medium transition-all hover:bg-light-surface-variant dark:hover:bg-dark-surface-variant ${
                currentYear === year
                  ? "bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary"
                  : "text-light-on-surface dark:text-dark-on-surface"
              }
            `}>
              {year}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`${className} flex flex-col`}>
      {/* Input Field */}
      <div className="relative">
        <input
          type="text"
          readOnly
          name={name}
          value={value ? formatDisplayDate(value) : ""}
          onClick={() => !isDisabled && setIsOpen(true)}
          className={`bg-transparent text-light-on-surface dark:text-dark-on-surface focus:outline-0 text-body-large h-[56px] px-4 pr-12 rounded w-full peer cursor-pointer
            ${
              isError
                ? "border-2 border-light-error dark:border-dark-error"
                : "border border-light-outline dark:border-dark-outline"
            }
            ${isDisabled ? "cursor-not-allowed opacity-50" : ""}`}
        />
        <label
          htmlFor={name}
          className={`absolute left-4 transition-all duration-200 transform pointer-events-none
            ${
              value
                ? "text-xs -top-2 px-1"
                : "top-[16px] text-body-large peer-focus:text-xs peer-focus:-top-2 px-1"
            }
            ${bgColor} text-light-on-surface dark:!text-dark-on-surface`}>
          {label || ""}
        </label>
        <Calendar className="absolute right-4 top-[16px] w-5 h-5 text-light-on-surface-variant dark:text-dark-on-surface-variant pointer-events-none" />
      </div>

      {/* Calendar Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setIsOpen(false)}>
          <div
            className="bg-light-surface dark:bg-dark-surface rounded-[2rem] shadow-xl w-full max-w-md mx-4 overflow-hidden  flex flex-col"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: "scaleIn 0.2s ease-out",
            }}>
            {/* Header */}
            <div className="bg-light-primary dark:bg-dark-primary p-4 text-light-on-primary dark:text-dark-on-primary">
              {viewMode === "days" && (
                <div className="flex items-center justify-between">
                  <button
                    onClick={handlePrevMonth}
                    className="p-2 hover:bg-white/10 rounded-full transition-all">
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setViewMode("months");
                        setShowManualEntry(false);
                      }}
                      className="text-title-large font-medium hover:bg-white/10 px-3 py-1 rounded-lg transition-all">
                      {currentMonth.toLocaleDateString("en-US", {
                        month: "long",
                      })}
                    </button>
                    <button
                      onClick={() => {
                        setViewMode("years");
                        setShowManualEntry(false);
                      }}
                      className="text-title-large font-medium hover:bg-white/10 px-3 py-1 rounded-lg transition-all">
                      {currentMonth.getFullYear()}
                    </button>
                  </div>

                  <button
                    onClick={handleNextMonth}
                    className="p-2 hover:bg-white/10 rounded-full transition-all">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}

              {viewMode === "months" && (
                <div className="flex items-center justify-between">
                  <button
                    onClick={handlePrevYear}
                    className="p-2 hover:bg-white/10 rounded-full transition-all">
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={() => setViewMode("years")}
                    className="text-title-large font-medium hover:bg-white/10 px-3 py-1 rounded-lg transition-all">
                    {currentMonth.getFullYear()}
                  </button>

                  <button
                    onClick={handleNextYear}
                    className="p-2 hover:bg-white/10 rounded-full transition-all">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}

              {viewMode === "years" && (
                <div className="flex items-center justify-between">
                  <button
                    onClick={handlePrevYearRange}
                    className="p-2 hover:bg-white/10 rounded-full transition-all">
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <div className="text-title-large font-medium">
                    {getYearsRange()[0]} -{" "}
                    {getYearsRange()[getYearsRange().length - 1]}
                  </div>

                  <button
                    onClick={handleNextYearRange}
                    className="p-2 hover:bg-white/10 rounded-full transition-all">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}
            </div>

            {/* Main Content */}
            <div className="p-6">
              {viewMode === "days" && renderDaysView()}
              {viewMode === "months" && renderMonthsView()}
              {viewMode === "years" && renderYearsView()}

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 h-10 px-4 rounded-full text-label-large font-medium border border-light-outline dark:border-dark-outline text-light-primary dark:text-dark-primary hover:bg-light-surface-variant dark:hover:bg-dark-surface-variant transition-all">
                  Cancel
                </button>

                {viewMode === "days" && (
                  <button
                    onClick={() => {
                      handleDateSelect(today);
                    }}
                    disabled={isDateDisabled(today)}
                    className="flex-1 h-10 px-4 rounded-full text-label-large font-medium bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    Today
                  </button>
                )}

                {viewMode !== "days" && (
                  <button
                    onClick={() => {
                      if (viewMode === "years") {
                        setViewMode("months");
                      } else if (viewMode === "months") {
                        setViewMode("days");
                      }
                    }}
                    className="flex-1 h-10 px-4 rounded-full text-label-large font-medium bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary hover:shadow-md transition-all">
                    {viewMode === "years" ? "Back to Months" : "Back to Days"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LabeledInputCalendar;
