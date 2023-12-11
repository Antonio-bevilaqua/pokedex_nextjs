import React from 'react'
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import { attributes } from '@/assets/utils/translations';

const SingleAttribute = ({ name, value, maxValue }) => {
    const getColor = () => {
        if (value <= 20) {
            return "red";
        }
        if (value <= 40) {
            return "orange";
        }
        if (value <= 60) {
            return "yellow";
        }
        if (value <= 80) {
            return "purple";
        }
        if (value <= 100) {
            return "indigo";
        }
        if (value <= 120) {
            return "sky";
        }
        if (value <= 140) {
            return "cyan";
        }
        if (value <= 160) {
            return "teal";
        }
        if (value <= 180) {
            return "emerald";
        }
        return "green";
    }

    const getPercentage = () => {
        let prct = value * 100 / maxValue;
        return prct >= 0 ? prct : 0;
    }

    return (
        <div className="flex gap-2 items-center p-2 pt-0">
            <span className="text-gray-600 dark:text-gray-400 w-20">{attributes[name]}</span>
            <ProgressBar color={getColor()} percentage={getPercentage()} animated={true} className="h-2" />
            <span className="text-gray-600 dark:text-gray-400">{value}</span>
        </div>
    )
}

export default SingleAttribute